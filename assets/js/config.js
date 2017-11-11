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
        jqueryForm:'lib/form-master/dist/jquery.form.min',//一个ajax发送表单请求的jquery插件
        common:'js/common',
        login:'js/login',
        teacherList:'js/teacher/list',
        teacherAdd:'js/teacher/add',
        teacherEdit:'js/teacher/edit',
        bootstrap:'lib/bootstrap/js/bootstrap',
        NProgress:'lib/nprogress/nprogress',
        datepicker:'lib/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min',
        zhcn:'lib/bootstrap-datepicker-master/dist/locales/bootstrap-datepicker.zh-CN.min',
        validate:'lib/validate-master/jquery-validate',//表单验证插件
        settings:'js/user/settings',
        uploadify:'lib/uploadify/jquery.uploadify'

    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        zhcn:{
            deps:['datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        }

    }
});
require(['less','common']);
