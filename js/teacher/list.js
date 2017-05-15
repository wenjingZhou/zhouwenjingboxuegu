/**
 * 页面最初先加载页面html结构，
 * 再加载页面link引入的样式，这时候页面所有的结构与样式都有了，后续只要有了bootstrap就ok了。
 * 页面先加载require.js，
 * 然后再加载main.js，
 * 如果是首页那么根据页面pathname加载了index.js，
 * 然后index.js存在很多依赖，这些依赖项同时异步加载，他们的执行顺序是不确定的，
 * 那么现在有一个aside模块，它依赖与jquery与jquery_cookie，所以需要在aside模块编写时进行配置
 * */
define(['bootstrap', 'jquery', 'aside', 'header','util','nprogress','template'], function(ud, $, ud, ud,util,nprogress,template) {
    // 检测登陆状态
    util.checkLoginStatus();
//    配置网站进度条
    nprogress.start();
    //window.onlod是页面所有的HTML,JS,CS加载完成后才执行
    //所有的HTML页面加载完成后在执行
    $(function(){
        nprogress.done();
    })
    //配置ajax全局请求的loading效果
    util.loading()
    /**
     * 讲师列表渲染：
     * 1、请求讲师列表数据
     * 2、请求成功后使用template编译页面中编写好的模版
     * 3、把模版放入指定页面中的位置
     * */
    //模板的一个方法用来做复杂编写，带入到相应的位置
    template.helper('age',function(tolValue){
        // 如果没有值，则返回空字符串
        if(!tolValue){
            return '';
        }
        //获取年龄
        var birthdayY = parseInt(tolValue);//出生日期
        var currentY = new Date().getFullYear();//现在的年份
        return currentY -birthdayY
    })
    $.get('/v6/teacher',function(data){
        // data.result的值为数组时，我们直接把data传入模版
        $('#tc-list-table').append(template('tc-list-tpl',data))
    })
});