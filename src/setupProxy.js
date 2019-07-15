const proxy = require('http-proxy-middleware')
module.exports = function(app){
    app.use(proxy('/homefis',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/youhui',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/find',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/zhuangbei',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/sports',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/xiaoyu',{target:'http://10.2.156.184:8080',changeOrigin:true}));
    app.use(proxy('/win',{target:'http://10.2.156.184:8080',changeOrigin:true}));
    app.use(proxy('/comment',{target:'http://m.shihuo.cn',changeOrigin:true}));
    app.use(proxy('/search',{target:'http://m.shihuo.cn',changeOrigin:true}));
   
}
