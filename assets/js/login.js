/**
 * Created by Administrator on 2017/11/6.
 */
    //登录
    define(['jquery','cookie'],function ($) {
        $("#loginForm").on('submit',function () {
            var param=$(this).serialize();//是一个标准的编码后的url字符串,而且是以key1=value1&key2=value2的形式存在
            console.log(param);
            $.ajax({
                type:'post',
                url:'/api/login',
                dataType:'json',
                data:param,
                success:function (data) {
                    //发送ajax请求,登录成功就把用户信息请求回来,需要存在本地的根目录下
                    if(data.code==200) {
                        location.pathname='/';//登录成功跳转首页
                        //登录成功
                        $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    }
                },
                error:function () {
                    alert('数据请求失败');
                }
            });
            return false;//阻止提交的默认行为
        });
    });


