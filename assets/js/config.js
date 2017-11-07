/**
 * Created by Administrator on 2017/11/6.
 */

require.config({
    baseUrl:'/assets',
    paths:{
        less:'lib/less/less',
        jquery:'lib/jquery/jquery-3.2.0',
        template:'lib/template/template-web',
        cookie:'lib/jquery/jquery.cookie',
        common1:'js/common',
        login:'js/login'
    }
});
require(['less','common']);
