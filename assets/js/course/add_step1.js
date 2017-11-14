//重写一遍
define(['jquery', 'tools', 'template', 'CKEDITOR', 'jqueryForm'], function ($, tools, template, CKEDITOR) {
    tools.expandMenu();
    tools.setMenu('/course/add');
    var cs_id = tools.getSearch().cs_id;
    //发送ajax请求,渲染页面
    $.ajax({
        url: '/api/course/basic',
        type: 'get',
        data: {cs_id: cs_id},
        success: function (info) {
            if (info.code == 200) {
                alert('页面渲染成功');
                console.log(info);
                var html = template('step1Tmp', info.result);
                $('.steps').html(html);
                //选中一级分类的时候,渲染二级分类
                renderSecondCategory();
                //将textarea替换为富文本
                CKEDITOR.replace('cs_brief');
            }
        }
    });
    //提交数据,保存
    $('.steps').on('submit','.basic',function () {
        $(this).ajaxSubmit({
            url:'/api/course/update/basic',
            type:'post',
            success:function (info) {
                alert('提交成功');
                console.log(info);
                location.href='/course/add_step2?cs_id='+info.result.cs_id;
            }
        });
        return false;
    });
    //选这个红一级分类,渲染二级分类
    function renderSecondCategory() {
        $('#cs_cg_pid').on('change', function () {
            var cg_id = $(this).val();
            $.ajax({
                url: '/api/category/child',
                type: 'get',
                data: {cg_id: cg_id},
                success: function (info) {
                    if (info.code == 200) {
                        console.log(info);
                        var ret = info.result.map(function (item) {
                            return '<option value="' + item.cg_id + '">' + item.cg_name + '</option>';
                        });
                        ret.unshift('<option>请选择子分类</option>');
                        $('#cs_cg_id').html(ret.join(''));

                    }
                }
            });
        });
    }

});