
define(['jquery','template','NProgress','tools','cookie'],function ($,template,NProgress,tools) {
    var php_session_id = $.cookie( 'PHPSESSID' );
    if ( !php_session_id && location.pathname != '/login' ) {
        // 不存在跳转到 登录页面
        location.pathname = '/login';
    }

    //加载效果,每次都从左上角出来,好丑
    $('.loading').fadeOut();
    $(document).ajaxStart(function () {
        $('.loading').fadeIn();
        NProgress.start();
    });
    $(document).ajaxStop(function() {
        $('.loading').fadeOut();
       NProgress.done();
    });

    /**
     第二部分, 页面加载的时候, 从 cookie 取出 userInfo, 得到用户的头像与用户名
     */
    var userInfo = $.cookie( 'userInfo' );

// alert( userInfo );
    var userInfoObj = JSON.parse( userInfo || '{}' );
    var html = template('user',userInfoObj);
    $('.aside .profile').html(html);


    //退出,调用后台的接口,后台清cookie
    $('#exit').on('click',function () {
        $.ajax({
            type:'post',
            url:'/api/logout',
            success:function(data) {
                if(data.code==200) {
                    //console.log(data);
                    //location.pathname='/';
                }

            }

        })
    });
    //功能就是点击左侧导航栏链接添加active的类
    tools.setMenu();
    $('.navs a+ul').prev().click(function() {
        $(this).next().toggle();
    });
});



