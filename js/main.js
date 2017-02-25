requirejs.config({
    baseUrl: '/',
    paths: {
        //第三方的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',

        //自己的路径配置
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

//所有的页面都需要这两个js，先加载他们
require(['jquery','bootstrap']);

/*
* 这里获取页面的pathname，然后对应的加载js
* */
(function(window){
    var pathname = window.location.pathname;
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
})(window);