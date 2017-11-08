/**教师列表项目
 * Created by Administrator on 2017/11/8.
 */
define(['jquery','template','bootstrap'],function ($,template) {
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function (data) {
            //console.log(data);
            var tbodyHtml = template('teacherListTableTemplate',{list:data.result});
            $('#teacherListTable tbody').html(tbodyHtml);

        }
    });
    //,如果直接给showInfo的链接添加点击事件,
    // 那么必须写在上面的ajax请求中,因为先请求数据,再渲染页面,才有showInfo存在,否则使用$('.showInfo')根本获取不到元素
    // 但是如果使用事件委托,直接给table绑定点击事件,那么根据js的事件机制,只有点击的时候才会触发事件,那时候页面上已经存在点击按钮了
    $('#teacherListTable').on('click','.showInfo',function() {
        var tc_id=$(this).parent().attr('data-tc-id');
        $.ajax({
        type:'get',
        data:{tc_id:tc_id},
        url:'/api/teacher/view',
        success:function (info) {
                if(info.code==200) {
                    var html=template('teacherListTableTpl2',info.result);
                    $('#teacherInfoTable tbody').html(html);
                    $('#teacherModal').modal('show');//点击按钮弹出模态框,这是bootstrap中提供的手动操控模态框的方法
                }
            }
        })
    });


});