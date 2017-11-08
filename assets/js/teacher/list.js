/**教师列表项目
 * Created by Administrator on 2017/11/8.
 */
define(['jquery', 'template', 'bootstrap'], function ($, template) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (data) {
            //console.log(data);
            var tbodyHtml = template('teacherListTableTemplate', {list: data.result});
            $('#teacherListTable tbody').html(tbodyHtml);

        }
    });
    //,如果直接给showInfo的链接添加点击事件,
    // 那么必须写在上面的ajax请求中,因为先请求数据,再渲染页面,才有showInfo存在,否则使用$('.showInfo')根本获取不到元素
    // 但是如果使用事件委托,直接给table绑定点击事件,那么根据js的事件机制,只有点击的时候才会触发事件,那时候页面上已经存在点击按钮了

    //渲染查看讲师信息的模态框
    $('#teacherListTable').on('click', '.showInfo', function () {
        var tc_id = $(this).parent().attr('data-tc-id');
        $.ajax({
            type: 'get',
            data: {tc_id: tc_id},
            url: '/api/teacher/view',
            success: function (info) {
                if (info.code == 200) {
                    //定义过滤器, template.defaults.imports.funName=function(input) {return transform(input);}
                    //一定要先过滤,再调用template方法生成模板字符串,不然会报错,我的理解是替换规则都定义好了,最后才能根据规则生成模板字符串
                    //最后添加到页面中
                    //过滤器
                    template.defaults.imports.space = function (data, arg1, arg2) {
                        return data.replace(/\|/g, ' ') ;//呵呵,我忘记了|是特殊字符,要转义
                    };
                    var html = template('teacherListTableTpl2', info.result);
                    $('#teacherInfoTable tbody').html(html);
                    $('#teacherModal').modal('show');
                    //点击按钮弹出模态框,
                    // 这是bootstrap中提供的手动操控模态框的方法,需要引入bootstrap的js
                }
            }
        });
    });

    //启用禁用按钮
    $('#teacherListTable').on('click', '.status', function () {
        var tc_id = $(this).parent('td').attr('data-tc-id');
        var tc_status = $(this).attr('data-tc-status');
        var that = this;
        $.ajax({
            url: '/api/teacher/handle',
            type: 'post',
            data: {
                tc_id: tc_id,
                tc_status: tc_status
            },
            success: function (info) {
                console.log(info);
                 $(that).attr('data-tc-status',info.result.tc_status).text(info.result.tc_status?'禁 用':'启 用');

            }
        });
    });
});

