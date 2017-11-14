/**
 * Created by Administrator on 2017/11/6.
 */

require.config({
    baseUrl:'/assets',
    paths:{

        //第三方插件
        less:'lib/less/less',
        jquery:'lib/jquery/jquery-3.2.0',
        template:'lib/template/template-web',
        cookie:'lib/jquery/jquery.cookie',
        bootstrap:'lib/bootstrap/js/bootstrap',
        NProgress:'lib/nprogress/nprogress',//进度条插件
        zhcn:'lib/bootstrap-datepicker-master/dist/locales/bootstrap-datepicker.zh-CN.min',
        uploadify:'lib/uploadify/jquery.uploadify',//文件上传插件
        region:'lib/jquery-region/jquery.region', //省市县三级联动
        CKEDITOR:'lib/ckeditor/ckeditor', //富文本编辑器
        validate:'lib/validate-master/jquery-validate',//表单验证插件
        jqueryForm:'lib/form-master/dist/jquery.form.min',//一个ajax发送表单请求的jquery插件
        datepicker:'lib/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min',//日历选择器插件
        Jcrop:'lib/Jcrop-WIP-2.x/js/Jcrop',

        //自定义模块
        common:'js/common',
        login:'js/login',
        teacherList:'js/teacher/list',
        teacherAdd:'js/teacher/add',
        teacherEdit:'js/teacher/edit',
        settings:'js/user/settings',
        tools:'js/tools',
        courseAdd:'js/course/add',
        step1:'js/course/add_step1',
        step2:'js/course/add_step2'


    },
    shim:{
        //不是模块,但是依赖其他模块
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
        },
        //不是模块,不依赖其他模块,但是返回一个CKEDITOR对象
        CKEDITOR:{
            exports:'CKEDITOR'
        },
        Jcrop:{
            deps:['jquery']
        }

    }
});
require(['less','common']);
