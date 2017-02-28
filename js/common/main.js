/*
requirejs.config({
    baseUrl: '/',
    paths: {
        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',


        // 自己写的路径配置
        common: 'js/common/common',
        login: 'js/home/login',

        //user
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        //course
        courseAdd: 'js/course/add',
        courseAddStep1: 'js/course/add_step1',
        courseAddStep2: 'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        category: 'js/course/category',
        categoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',

        //home
        homeLogin: 'js/home/login',
        homeRepass: 'js/home/repass',
        homeSettings: 'js/home/settings',

        //teacher
        teacherAdd: 'js/teacher/add',
        teacherList: 'js/teacher/list'



    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery','bootstrap','common']);

/!*
 *这里获取页面的pathname，然后对应的加载js。
 * *!/
(function(window){

    // 获取路径
    var pathname = window.location.pathname;
    /!*
    * 判断登录状态：
    *
    * 1、登录页
    * 1.1 没有SESSID,不要管
    * 1.2 有SESSID,跳转到首页
    *
    * 2、 其他页
    * 2.1 没有SESSID，跳转到登录页
    * 2.2 有SESSID,不要管
    * *!/
    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID = $.cookie('PHPSESSID');

        //登录状态前端效验
        if(pathname === '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        }
    });

    // 如果没有发生页面跳转，就加载对应的js模块
    switch(pathname){
        //user
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
        //course
        case '/html/course/add.html':
            require(['courseAdd']);
            break;
        case '/html/course/add_step1.html':
            require(['courseAddStep1']);
            break;
        case '/html/course/add_step2.html':
            require(['courseAddStep2']);
            break;
        case '/html/course/add_step3.html':
            require(['courseAddStep3']);
            break;
        case '/html/course/category.html':
            require(['category']);
            break;
        case '/html/course/category_add.html':
            require(['categoryAdd']);
            break;
        case '/html/course/list.html':
            require(['courseList']);
            break;
        case '/html/course/topic.html':
            require(['courseTopic']);
            break;

        //home
        case '/html/home/login.html':
            require(['homeLogin']);
            break;
        case '/html/home/repass.html':
            require(['homeRepass']);
            break;
        case '/html/home/settings.html':
            require(['homeSettings']);
            break;

        //teacher
        case '/html/teacher/add.html':
            require(['teacherAdd']);
            break;
        case '/html/teacher/list.html':
            require(['teacherList']);
            break;
    }
})(window);*/
requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',

        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common: 'js/common/common',
        login: 'js/home/login'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap', 'common']);

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {

    // 获取路径
    var pathname = window.location.pathname;

    /**
     * 判断登陆状态:
     *
     * 1、登陆页
     * 1.1、没有SESSID，不用管
     * 1.2、有SESSID，跳转到首页
     *
     * 2、其它页
     * 2.1、没有SESSID，跳转到登陆页
     * 2.2、有SESSID，不用管
     */

    require(['jquery', 'jqueryCookie'], function($, undefined) {
        var sessID = $.cookie('PHPSESSID');

        // 登陆状态前端效验
        if(pathname === '/html/home/login.html' && sessID) {
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID) {
            location.href = '/html/home/login.html';
        }

        // 如果没有发生页面跳转，就加载对应的js模块
        switch(pathname) {
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/home/login.html':
                require(['login']);
                break;
        }
    });

})(window);

