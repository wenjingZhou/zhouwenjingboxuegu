define(['jquery', 'jquery_cookie'], function ($, ud) {
    /*
     /取出cookie储存的用户信息
     我们储存的用户信息是一个JSON字符串，需手动解析为JS对象JSON.parse（）调用这个方法
     */
    var userInfo = {}
    //因为JS是单线程工作的，所以有错误就不会执行后面的程序，使用try方法
    //当错误，或则没有接受到数据的时候执行一个别的程序，然后继续执行后面的程序
    //userInfo = JSON.parse($.cookie('userInfo'))||null,也可以
    //var userInfo = JSON.parse($.cookie('userInfo') || '{}')也可以;
    try {
        userInfo = JSON.parse($.cookie('userInfo'))
    } catch (e) {

    }
    //在保证存在头像的请求下在设置（请求到数据后在执行）
    //如果没有头像或则没有请求到数据的时候使用默认头像就userInfo.tc_avatar这个为空，就不会改变img的值
    //&&取假，前面为真的时候取后面的，前面为假时就取前面的
    userInfo.tc_avatar && $('.aside .avatar img').attr('src', userInfo.tc_avatar)
    //JQ的text已经设置好了如果没有值就为空，不用自己userInfo.tc_name||null了
    $('.aside h4').text(userInfo.tc_name)

//    左侧导航下拉列表
    $('.slide-down').on('click',function(){
        $(this).next().slideToggle();
    })
    /*
     /左侧导航焦点定位：
     1.先获取页面的pathname（就是根网页后面的地址）
     2.定义一个对象，这个对象储存pathname与左侧导航对应的href属性值
     3.然后我们使用网页的pathname去对象中匹配
     匹配到了就使用这个匹配到的值获取对应的a添加active_设置焦点，
     如果没匹配到，就直接使用该pathname获取对应a添加active_Class设置焦点。
     */
    var pathname = location.pathname;
//    这个配置那些无规律的（就是不是直接对应a标签的）
//    // 对象左边的key对应网站的pathname，右边的值对应导航中a标签的href属性值
    var pathToHref={
        '/html/home/settings.html': '/',
        '/html/home/repass.html': '/',
        '/html/user/profile.html': '/html/user/list.html',
        '/html/teacher/add.html': '/html/teacher/list.html',
        '/html/teacher/edit.html': '/html/teacher/list.html'
    };
    var href = pathToHref[pathname]?pathToHref[pathname]:pathname;
    $('.aside a').removeClass('active').filter('[href="' + href + '"]').addClass('active');
    //filter匹配对应值来查找元素，还可以是Class;
});
