/**
 * Created by Administrator on 2017/11/9.
 */

//使用了jquery的一个插件jquery.form.js,可以不同每都序列化表单字符串,插件会发送出去
define(['jquery', 'jqueryForm', 'zhcn', 'validate'], function ($) {
    $('#teacherAddForm').validate({
        description: {
            teacherName: {
                required: '必须填写姓名'
            },
            teacherPass:{
                required:'必须填写密码',
                pattern:'密码必须是6-16位英文字母或者数字或者特殊字符'
            },
            teacherJoinDate:{
                required:'必须填写入职日期'
            }

        }
    });
    $('#teacherAddForm').on('submit', function () {
        $(this).ajaxSubmit({
            url: '/api/teacher/add',
            type: 'post',
            success: function (data) {
                if (data.code == 200) {
                    console.log(data);
                    alert('提交成功');
                    location.pathname = '/teacher/list';
                }
            }

        });
        return false;
    });

});
/* $('#teacherAddForm').on('submit',function() {

 $(this).ajaxSubmit({
 url:'/api/teacher/add',
 type:'post',
 success:function(data) {
 if(data.code==200) {
 console.log(data);
 alert('提交成功');
 location.pathname='/teacher/list';
 }
 }
 });
 return false;//阻止表单提交的默认行为(数据传到url里面发送过去),input的type=submit可以按回车键提交数据,提升用户体验
 });*/

