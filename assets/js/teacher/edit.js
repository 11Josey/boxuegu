/**
 * Created by Administrator on 2017/11/9.
 */
//编辑讲师页面
define(['jquery','template'],function($,template) {
    var search = location.search;//?tc_id=4
    var reg = /tc_id=(\d+)/ ;
    var tc_id=reg.exec(search)[1];
    $.ajax({
        url:'/api/teacher/view',
        type:'post',
        data:{tc_id:tc_id},
        success:function(info) {
            //console.log(info);
            if(info.code==200) {
                var html=template('teacherEditTemplate',info.result);
                $('#teacherEdit').html(html);

            }
        }
    });
    //
    $('#teacherEdit').on('submit','#teacherEditForm',function(){
        var formData = $('#teacherEditForm').serialize();
       // console.log(formData);
        $.ajax({
            url:'/api/teacher/update',
            type:'post',
            data:formData,
            success:function(info) {
                //console.log(info);
                location.pathname='/teacher/list';
            }
        });
        return false;
    });
});