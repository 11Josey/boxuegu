/**
 * Created by Administrator on 2017/11/13.
 */
define(['jquery', 'tools', 'template', 'Jcrop', 'uploadify'], function ($, tools, template) {
    tools.expandMenu();
    tools.setMenu('/course/add');
    //请求数据渲染页面
    var cs_id = tools.getSearch().cs_id;
    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: {cs_id: cs_id},
        success: function (info) {
            if (info.code = 200) {
                console.log('数据请求成功');
                console.log(info);
                var html = template('step2Temp', info.result);
                $('.steps').html(html);
                handImgaeUpload(info.result);
                //如果渲染的页面由图片,那么就启动裁切功能
                if (info.result.tc_cover_original) {
                    JcropImage();
                }
            }
        }
    });
    //上传图片
    function handImgaeUpload(result) {
        $('#uploadPic').uploadify({
            swf: '/assets/lib/uploadify/uploadify.swf',
            uploader: '/api/uploader/cover',
            fileObjName: 'cs_cover_original',
            formData: {cs_id: result.cs_id},
            onInit: function () {
                $('#uploadPic').css('overflow', 'hidden').find('div').removeClass('uploadify-button');
            },
            onUploadSuccess: function (_, data) {
                alert("上传完成");
                console.log(data);
                $('.preview').html('').append($('<img />').attr('src', JSON.parse(data).result.path));
                $('#cutPicBtn').prop('disabled', false);
                JcropImage();
            },
            height: '40px',
            buttonText: '选择图片',
            buttonClass: 'btn btn-success btn-sm',
            itemTemplate: '<span></span>',
            width: '70px'
        })
    }
    var x;
    var y;
    var w;
    var h;

    //预览图片
    function showCoords(obj) {
        x=obj.x;
        y=obj.y;
        w=obj.w;
        h=obj.h;
    }
    function JcropImage() {
        $('.preview img').Jcrop({
            aspectRatio: 2,//设置裁剪区域的宽高比
            onChange:showCoords,
            onSelect:showCoords
        }, function () {
            var jcrop_api = this;//Jcrop的实例,里面有很多方法
            console.log(this);
            //设置裁切区域的位置和大小
             w = jcrop_api.ui.stage.width;
             h = w / 2;
             x = 0;
             y = (jcrop_api.ui.stage.height - h) / 2;
            jcrop_api.newSelection();//创建一个新的选区,
            jcrop_api.setSelect([x, y, w, h]);//设置选区的位置和大小
            //设置预览区域的宽高和容器
            jcrop_api.initComponent('Thumbnailer', {
                width: '240px',
                height: '120px',
                //源代码生成的图片预览的容器div Thumbnailer在上传的图片下面,
                // 这里更改了源代码,target指向的就是放预览的容器
                target: '.thumb'
            });
        });
    }
    //点击裁切按钮,提交请求
    $('.steps').on('click','#cutPicBtn',function () {
        $.ajax({
            url:'/api/course/update/picture',
            type:'post',
            data:{
                x:x,
                y:y,
                w:w,
                h:h,
                cs_id:cs_id
            },
            success:function (info) {
                if(info.code==200){
                    alert("图片裁切上传成功");
                    location.href='/course/add_step3?cs_id='+cs_id;

                }
            }
        });
    });

});
