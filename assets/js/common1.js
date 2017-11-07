/**
 * Created by Administrator on 2017/11/5.
 */
//刚进入网站的时候.需要登录,如果已经登录了,那么
//如果没有登录,那么就需要跳转到登录页面进行登录
    define(['jquery','template','cookie'],function ($,template) {
        var php_sess_id = $.cookie('PHPSESSID');
        if (!php_sess_id && location.pathname != '/login') {
            location.pathname = '/login';
        }

//页面加载完毕后需要将用户名和头像显示出来
        if(location.pathname!='login') {
            var userInfo = JSON.parse($.cookie('userInfo')||'{}');
            console.log(userInfo);
            var html = template('user',userInfo);
            console.log(html);
            $('.aside .profile').html(html);


//点击退出
            $('#exit').click(function () {
                $.removeCookie('PHPSESSID');//肯定要删掉PHPSESSID,但是在这种方法删不掉
                location.pathname='/login';//然后跳转到登录页面
            });
        }
    });


