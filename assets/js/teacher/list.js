/**教师列表项目
 * Created by Administrator on 2017/11/8.
 */
define(['jquery','template'],function ($,template) {
    $.ajax({
        url:'/api/teacher',
        type:'get',
        success:function (data) {
            console.log(data);
            var tbodyHtml = template('teacherListTableTemplate',{list:data.result});
            $('#teacherListTable tbody').html(tbodyHtml);

        }
    });

});
