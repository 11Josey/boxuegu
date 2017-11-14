/**
 * Created by Administrator on 2017/11/12.
 */
/*课程添加的步骤*/
define(['jquery','tools','jqueryForm'],function($,tools) {
    tools.expandMenu();//展开菜单
    //创建课程
    $('#courseCreateForm').on('submit',function () {
        $(this).ajaxSubmit({
            type:'post',
            url:'/api/course/create',
            success:function(info) {
                if(info.code==200) {
                    alert('课程创建成功!');
                    console.log(info);
                    var cs_id=info.result.cs_id;
                    location.href='/course/add_step1?cs_id='+cs_id;//用pathname写的路径问号会被编码,这里用href

                }
            }

        });
        return false;
    });



});