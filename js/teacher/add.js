/**
 * Created by 周文静 on 2017/5/14.
 */
/**
 * 页面最初先加载页面html结构，
 * 再加载页面link引入的样式，这时候页面所有的结构与样式都有了，后续只要有了bootstrap就ok了。
 * 页面先加载require.js，
 * 然后再加载main.js，
 * 如果是首页那么根据页面pathname加载了index.js，
 * 然后index.js存在很多依赖，这些依赖项同时异步加载，他们的执行顺序是不确定的，
 * 那么现在有一个aside模块，它依赖与jquery与jquery_cookie，所以需要在aside模块编写时进行配置
 * */
define(['bootstrap', 'jquery', 'aside', 'header','util','nprogress','jquery_form'], function(ud, $, ud, ud,util,nprogress,ud) {
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
    // 表单转ajax提交(增加讲师列表)，成功后跳转到讲师列表页
    $('.teacher-add form').ajaxForm(function() {
        location.href = '/html/teacher/list.html';
    });
});
