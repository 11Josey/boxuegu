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
        return false;
    });

});