/**
 * Created by Administrator on 2017/11/11.
 */
define(['jquery','template','uploadify','zhcn'],function($, template) {
    $.ajax({
        url:'/api/teacher/profile',
        type:'get',
        success:function(info) {
           // console.log(info);
            var html = template('setFormTpl',info.result);
            $('#setForm').html(html);
            $('#upfile').uploadify({
                swf:'/assets/lib/uploadify/uploadify.swf',//记住浏览器一定要开flash功能，不然无法上传
                uploader:'/api/uploader/avatar',//后端提供的接口,文件提交的地址
                //用在服务端，后端脚本通过$_FILES[fileObjName]来获取上传的文件，
                // 默认是fileData，在这里后端提供的是tc_avatar
                fileObjName:'tc_avatar',
                buttonText:'',
                buttonImage:'',
                fileSizeLimit:'1MB',//允许上传的单个文件的最大尺寸
                //上传成功函数有三个参数，第一个是上传成功的文件对象，第二个是服务端返回（echo)的数据，第三个
                //参数是服务端响应的结果，成功为true,失败为false
                onUploadSuccess:function(_,data){
                    console.log(data);
                    alert(1);
                    $('#uploadView').attr('src',JSON.parse(data).result.path);

                },
              /*  itemTemplate:'<span></span>',//这里面可以得到关于文件的信息*/
                width:'120px',
                height:'120px'
            })

        }
    });
});