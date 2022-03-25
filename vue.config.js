module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        ws: true, // 握手协议
        changeOrigin: true, // 允许跨域
        pathRewrite: { // 路径重写
          '^/api': ''
        }
      }
    }
  }
}
// 正向代理：浏览器devServer
// 反向代理：nginx