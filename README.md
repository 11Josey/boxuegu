# boxuegu
a  simple background managing system called "博学谷"
##主要知识点
### php路由
&emsp;&emsp;最开始学项目的时候默认根目录下的index.html就是项目的首页,但是现在用index.php分发页面,php里面有一个超全局变量&_SERVER,里面有一个属性PATH_INFO,在http://www.bxg.com/index这个ulr后的任何字符串都会存进去里面.所以根据这个属性可以实现路由的功能,所有页面的公共部分都通过php的include语句请求
