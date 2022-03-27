const KoaRouter = require('koa-router')
const Fly = require("flyio/src/node")
const fly = new Fly;
const jwt = require('jsonwebtoken');
// 2.生成路由器对象
const router = new KoaRouter()
// express: request response next
// koa: ctx next
/*router.get('/test', (ctx) => {
    // 1.获取请求参数
    // 2.处理请求数据
    // 3.返回响应数据
    ctx.body = '返回测试数据'
})*/

// 注册index主页的接口
const indexData = require('../datas/index.json')
// console.log(indexData,typeof indexData)
router.get('/getIndexData', (ctx) => {
  ctx.body = indexData
})

// 注册分类页的接口
const categoryData = require("../datas/categoryDatas.json");
router.get("/getCategoryData", (ctx) => {
  ctx.body = categoryData;
});

// 注册首页分类数据的接口
const indexCateList = require("../datas/indexCateList.json");
router.get("/getIndexCateList", (ctx) => {
  ctx.body = indexCateList;
});

// 注册获取用户openId的接口
router.get('/getOpenId', async (ctx) => {
  // 1.接收请求参数
  let code = ctx.query.code

  // 2.整合数据，对接微信服务器
  let appId = 'wx52b47b0276140ca6'
  let appSecret = 'd8aebfec2d5bae260f354b91974c268e'

  // 3.接收到微信服务器返回的数据，对当前用户数据进行自定义绑定，加密
  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  //通过用户id获取信息,参数直接写在url中
  let result = await fly.get(url)
  let openId = JSON.parse(result.data).openid
  console.log('openId:', openId)
  // 4.返回给浏览器端当前用户加密后的标识
  let userInfo = {
    openId
  }
  // 4.1对用户数据加密生产token
  let token = jwt.sign(userInfo, 'token');
  console.log(token)
  // 4.2反编译token字段
  // let verifyResult = jwt.verify(token); // secret or public key must be provided
  // let verifyResult = jwt.verify(token, 'xxx'); // invalid signature
  let verifyResult = jwt.verify(token, 'token');
  console.log(verifyResult)
  // 5.返回加密之后的数据给浏览器端
  ctx.body = token
})


// 向外暴露路由器对象
module.exports = router
