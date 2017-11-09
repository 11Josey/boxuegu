/**
 * Created by Administrator on 2017/11/6.
 */

require.config({
    baseUrl:'/assets',
    paths:{
        less:'lib/less/less',
        jquery:'lib/jquery/jquery-3.2.0',
        template:'lib/template/template-web',
        cookie:'lib/jquery/jquery.cookie',
        jqueryForm:'lib/form-master/dist/jquery.form.min',
        common:'js/common',
        login:'js/login',
        teacherList:'js/teacher/list',
        teacherAdd:'js/teacher/add',
        teacherEdit:'js/teacher/edit',
        bootstrap:'lib/bootstrap/js/bootstrap',
        NProgress:'lib/nprogress/nprogress'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
require(['less','common']);
