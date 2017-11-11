/**
 * Created by Administrator on 2017/11/9.
 */
//编辑讲师页面
//因为zhcn依赖datepicker,所以在这里不需要引入datepicker,在加载zhcn的时候会先去加载datepicker模块
define(['jquery','template','zhcn','validate'],function($,template) {
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
                $('#teacherEditForm').validate({
                    description:{
                        teacherName:{
                            required:"姓名不能为空"
                        },
                        teacherJoinDate:{
                            required:'日期不可以为空'
                        }
                    }

                });
            }
        }
    });
    //这里是先发送数据再渲染除了表单,所以需要用哪个form的父元素来委派添加事件,不然会报错

    $('#teacherEdit').on('submit','#teacherEditForm',function(){
        var formData = $('#teacherEditForm').serialize();
       console.log(formData);
        $.ajax({
            url:'/api/teacher/update',
            type:'post',
            data:formData,
            success:function(info) {
                console.log(info);
                location.pathname='/teacher/list';
            }
        });
        return false;
    });
});