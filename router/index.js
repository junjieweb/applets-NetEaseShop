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

// 向外暴露路由器对象
module.exports = router;
