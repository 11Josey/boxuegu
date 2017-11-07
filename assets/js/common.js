
define(['jquery','template','cookie'],function ($,template) {
    var php_session_id = $.cookie( 'PHPSESSID' );

    if ( !php_session_id && location.pathname != '/login' ) {
        // 不存在跳转到 登录页面
        location.pathname = '/login';
    }


    /**
     第二部分, 页面加载的时候, 从 cookie 取出 userInfo, 得到用户的头像与用户名
     */


    var userInfo = $.cookie( 'userInfo' );

// alert( userInfo );
    var userInfoObj = JSON.parse( userInfo || '{}' );
    var html = template('user',userInfoObj);
    $('.aside .profile').html(html);



});



