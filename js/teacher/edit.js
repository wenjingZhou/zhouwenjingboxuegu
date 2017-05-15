/**
 * 页面最初先加载页面html结构，
 * 再加载页面link引入的样式，这时候页面所有的结构与样式都有了，后续只要有了bootstrap就ok了。
 * 页面先加载require.js，
 * 然后再加载main.js，
 * 如果是首页那么根据页面pathname加载了index.js，
 * 然后index.js存在很多依赖，这些依赖项同时异步加载，他们的执行顺序是不确定的，
 * 那么现在有一个aside模块，它依赖与jquery与jquery_cookie，所以需要在aside模块编写时进行配置
 * */
define(['bootstrap', 'jquery', 'aside', 'header','util','nprogress','template', 'jquery_form'], function(ud, $, ud, ud,util,nprogress,template,ud) {
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
     * 先请求讲师当前信息进行数据回显，也是就是编辑的时候会看到他之前的数据
     * 然后使用表单提交插件把表单转ajax方法修改讲师信息。
     * */
    var tcId= util. getSearch('tc_id');
    $.get('/v6/teacher/edit', { tc_id: tcId }, function(data) {
        $('.teacher-add').append(template('tc-edit-tpl', data.result));
        // 修改讲师信息，修改成功后跳转到列表页
        $('.teacher-add form').ajaxForm({
            // 这里的data不会复写表单的数据，是在表单数据基础上进行新增,
            //对应数据的ID值给后台让他知道修改那一个
            data: { tc_id: tcId },
            // 成功回调，然后跳转网页
            success: function() {
                location.href = '/html/teacher/list.html';
            }
        })
    })

});