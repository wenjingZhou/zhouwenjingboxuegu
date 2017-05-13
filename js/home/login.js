/**
 * bootstrap是普通模块，也没有对外暴露任何全局变量，所以我们这里接收到的值为undefined，
 * jquery_form也是普通模块，也没有对外暴露任何全局变量，收到的值也为undefined，
 * jquery是ADM模块，我们这里可以接收到正常jQuery对外暴露的方法
 * */
define(['bootstrap','jquery','jquery_form']
    /**
     * 这里的形参用来接收模块的输出，
     * 但是需要注意它们是按照顺序接收输出值的，
     * 同时这些形参的名字可以任意起。
     */
    ,function(un,$,un){
    $('#login-form').ajaxForm({
        url:'/v6/login',
        type:'post',
        success:function(){
            location.href='/'
        },
        error:function(){
            alert('登陆失败！！！');
        }
    })
})