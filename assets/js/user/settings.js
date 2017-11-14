/**
 * Created by Administrator on 2017/11/11.
 */
define(['jquery','template','CKEDITOR','jqueryForm','uploadify','zhcn','region','validate','cookie'],function($, template,CKEDITOR) {
    //页面初始化
    $.ajax({
        url:'/api/teacher/profile',
        type:'get',
        success:function(info) {
           console.log(info);
            var html = template('setFormTpl',info.result);
            $('#setForm').html(html);
            $('#upfile').uploadify({
                swf:'/assets/lib/uploadify/uploadify.swf',//记住浏览器一定要开flash功能，不然无法上传
                uploader:'/api/uploader/avatar',//后端提供的接口,文件提交的地址
                //用在服务端，后端脚本通过$_FILES[fileObjName]来获取上传的文件，
                // 默认是fileData，在这里后端提供的是tc_avatar
                fileObjName:'tc_avatar',
                buttonText:'',
                buttonImage:'',//上传按钮的背景色
                fileSizeLimit:'1MB',//允许上传的单个文件的最大尺寸
                //上传成功函数有三个参数，第一个是上传成功的文件对象，第二个是服务端返回（echo)的数据，第三个
                //参数是服务端响应的结果，成功为true,失败为false
                onUploadSuccess:function(_,data){
                    console.log(data);
                    alert(1);
                    $('#uploadView').attr('src',JSON.parse(data).result.path);
                    console.log($.cookie('userInfo'));
                    //上传完头像同时更新左侧的头像和cookie中的头像地址
                    var userInfo = JSON.parse($.cookie('userInfo'));
                    userInfo.tc_avatar=JSON.parse(data).result.path;
                    $('.avatar img').attr('src', userInfo.tc_avatar);
                    $.cookie('userInfo',JSON.stringify(userInfo));


                },
              /*  itemTemplate:'<span></span>',//这里面可以得到关于文件的信息*/
                width:'120px',
                height:'120px'
            });
            //省市县三级联动
            $('.hometown').region({
                url:'/assets/lib/jquery-region/region.json'
            });
            //富文本编辑器
           CKEDITOR.replace( 'tc_introduce');//里面的值是id,将次id对应的textarea替换成富文本编辑器

            $('#setForm').validate( {
                description:{
                    tc_cellphone:{
                        required:'手机号码不可以为空',
                        pattern:'手机号码必须是11位'
                    },
                    tc_email:{
                        required:'邮箱不可以为空',
                        pattern:'不符合邮箱的格式'
                    }
                }
            });
        }
    });

    //ajax提交表单
    $('#setForm').on('submit',function () {
        //需要把CKEDITOR的内容更新到textarea中,才可以使用ajax提交
        for(var k in CKEDITOR.instances) {
            CKEDITOR.instances[k].updateElement();
        }
        //将省市县的数据获取到并且用|连接起来,提交上去
        var tc_hometown = $('select',this).find(':selected').map(function() {
            return $(this).text();
        }).toArray().join('|');//将省市县以省|市|县的形式提交上去
        $(this).ajaxSubmit({
            url:'/api/teacher/modify',
            type:'post',
            data:{tc_hometown:tc_hometown},
            success:function(info) {
                if(info.code==200) {
                    alert('提交成功');
                }
            }
        });
        return false;

    });

});