/**
 * Created by 周文静 on 2017/5/11.
 */
/*
**因为是所有页面公用的入口模块，
**所以这里面会对所有的模块都进行paths配置
* */
require.config({
    //公共路径
    baseUrl: '/',
    paths:{
        //每个页面对应的模块
        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',
        tcAdd:  'js/teacher/add',
        usProfile: 'js/user/profile',
        usList: 'js/user/list',
        csAdd: 'js/course/add',
        csList: 'js/course/list',
        cgAdd: 'js/course/category_add',
        cgList: 'js/course/category_list',
        csAdd1: 'js/course/course_add_step1',
        csAdd2: 'js/course/course_add_step2',
        csAdd3: 'js/course/course_add_step3',
    //    公共模块
        aside: 'js/common/aside',
        header: 'js/common/header',
        util: 'js/common/util',
    //    第三方模块
        jquery: 'lib/jquery/jquery.min',
        //依赖JQ文件的

        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jquery_form:'lib/jquery-form/jquery.form',
        jquery_cookie: 'lib/jquery-cookie/jquery.cookie',
    //    不依赖JQ的
        nprogress: 'lib/nprogress/nprogress',
        template:   'lib/artTemplate/template'
    },
//    配置普通模块的依赖或者输出
    shim:{
       bootstrap:{
           deps:['jquery']
       }
    }
})
/*
* 如果用户打开的是首页，那么应该加载index模块
*如果打开的是登录页，那么应该加载login模块
*我们就需要根据一定规则把加载模块写活
* 不能写死
* require(['index'])
* */
var obj = {
    '/': 'index',
    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',
    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',
    '/html/teacher/add.html': 'tcAdd',
    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'usList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/category_list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course/course_add_step2.html': 'csAdd2',
    '/html/course/course_add_step3.html': 'csAdd3'
};
//根据页面的pathname加载对应的模块
//location是BOM(浏览器对象模型)的一个方法
//lovation是浏览器地址方法
//lovation.pathname是主网页后面的子网页的地址即http://zhouwenjingbxg.com/html/user/list.html
//zhouwenjingbxg.com后面的地址，主网页就是/就好
// 根据页面的pathname获取要加载的模块名
var moduleName = obj[location.pathname];
//加载这个模块，这个模块我们称为页面的主模块
require([moduleName]);