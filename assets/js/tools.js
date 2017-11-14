/**
 * Created by Administrator on 2017/11/12.
 */
define(['jquery'], function ($) {
    //其实这个有点逆向思维,是根据location.pathname,然后去找侧边栏的链接的href,如果相同的话,就给这个链接添加一个class=active的类
    var setMenu = function (urlPart) {
        var pathname = urlPart||location.pathname;
        console.log(pathname);
        $('.navs li a').toArray().filter(function (dom) {
            return dom.pathname === pathname;
        }).forEach(function (dom) {
            $(dom).addClass('active');
        });
    };
    var expandMenu = function () {
        $('.navs a+ul').show();//显示二级菜单
    };
    //封装
    var getSearch= function () {
        var temp={};
        var search = location.search;
        if(search.length==0) {
            return temp;
        }
        //?a=b&c=d&e=f
        search.slice(1).split('&').forEach(function(item) {
            var vk = item.split('=');
            temp[vk[0]]=vk[1];
        });
        return temp;
    };
    return {
        setMenu: setMenu,
        expandMenu: expandMenu,
        getSearch:getSearch
    }

});