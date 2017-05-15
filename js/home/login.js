/**
 * bootstrap是普通模块，也没有对外暴露任何全局变量，所以我们这里接收到的值为undefined，
 * jquery_form是AMD模块，所以不需要配置shim项的依赖，
 * 但是该模块是jquery插件，所有的方法都放置到了jquery上，
 * 所以该插件没有对外暴露任何全局变量，收到的值为undefined。
 * jquery是ADM模块，我们这里可以接收到正常jQuery对外暴露的方法
 * jquery_cookie是AMD模块，所以不需要配置shim项的依赖吗，
 * 但是该模块是jquery插件，所有的方法都放置到了jquery上，
 * 所以该插件没有对外暴露任何全局变量，收到的值为undefined。
 * */
define(['bootstrap', 'jquery', 'jquery_form', 'jquery_cookie','nprogress','util']
    /**
     * 这里的形参用来接收模块的输出，
     * 但是需要注意它们是按照顺序接收输出值的，
     * 同时这些形参的名字可以任意起。
     */
    , function(ud, $, ud, ud,nprogress,util) {
        //配置网站进度条
        nprogress.start();
        //window.onlod是页面所有的HTML,JS,CS加载完成后才执行
        //下面是所有的HTML页面加载完成后在执行，不包括js.cs
        $(function(){
            nprogress.done()
        });
        //配置ajax全局请求的loading效果
        util.loading()
        //监听form表单的提交事件，转为ajax请求，请求成功，那么跳转首页
        $('#login-form').ajaxForm({
            /*
             /登录成功后，服务器会返回该用户的信息，
             我们把它储存到cookeie，提供其他页面使用
             因为cookie只能传入字符串（服务器返回的是对象）所以使用JSON.stringify()把JS对象转为json字符串
             */
            success: function(data) {
                $.cookie('userInfo', JSON.stringify(data.result), {path: '/'});
                location.href = '/';
            },
            error: function () {
                alert('登陆失败！！！');
            }
        });

        //检验登录状态
        if($.cookie('PHPSESSID')){
            location.href = '/'
        }
    })