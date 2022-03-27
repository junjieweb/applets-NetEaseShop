const KoaRouter = require("koa-router");
// 2.生成路由器对象
const router = new KoaRouter();
// express: request response next
// koa: ctx next
/*router.get('/test', (ctx) => {
    // 1.获取请求参数
    // 2.处理请求数据
    // 3.返回响应数据
    ctx.body = '返回测试数据'
})*/

// 注册index主页的接口
const indexData = require("../datas/index.json");
// console.log(indexData,typeof indexData)
router.get("/getIndexData", (ctx) => {
  ctx.body = indexData;
});

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
router.get('/getOpenId', (ctx) => {
  // 1.接收请求参数
  let code = ctx.query.code
  console.log('code:', code)
  // 2.整合数据，对接微信服务器

  // 3.接收到微信服务器返回的数据，对当前用户数据进行自定义绑定，加密

  // 4.返回给浏览器端当前用户加密后的标识

})

// 向外暴露路由器对象
module.exports = router;
