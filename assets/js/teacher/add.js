/**
 * Created by Administrator on 2017/11/9.
 */
define(['jquery'],function($) {
    $('#teacherAddForm').on('submit',function() {
        var formData=$(this).serialize();
        console.log(formData);
        $.ajax({
            url:'/api/teacher/add',
            type:'post',
            data:formData,
            success:function(data) {
                if(data.code==200) {
                    alert('提交成功');
                    console.log(data);
                    location.pathname='/teacher/list';
                }


            }
        });
        return false;//阻止表单提交的默认行为(数据传到url里面发送过去),input的type=submit可以按回车键提交数据,提升用户体验
    });

});