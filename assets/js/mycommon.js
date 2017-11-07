/**
 * Created by Administrator on 2017/11/7.
 */
//刚开始的时候不论输入哪个网址,只要是未登录的状态,那么就会跳转到登录界面,进行登录
//在登录界面进行登录的逻辑处理
//公共部分
if(!$.cookie('PHPSESSID')&&window.location.pathname!='/login') {
    window.location.pathname='/login';

}
/*取出cookie的值,渲染字符串*/
var userInfo = JSON.parse($.cookie('userInfo')||'{}');
var html= template('tempId',userInfo);
$('.aside .profile').html(html);






//这段代码需要引入登录界面
$('#formId').on('submit',function () {
    var param= $(this).serialize();
    $.ajax({
        type:'post',
        url:'/api',
        data:param,
        dataType:'json',
        success:function (data) {
            if(data.code==200) {
                console.log('登录成功!');
                $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
            }
        }


    });
    return false;
});