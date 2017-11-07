define(['jquery','template-web'],function($,template) {
    var data ={
        title:"前端基本功",
        list:[
            'html','css','js'
        ]
    };
    var html=template('temp',data);
    $('.container').html(html);
});