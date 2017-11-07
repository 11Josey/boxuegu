<?php 
	$path_info = array_key_exists('PATH_INFO',$_SERVER);//判断$_SERVER中是否有这个键存在
	if(!$path_info) {
		$path_info=$_SREVER['PATH_INFO'];
	}else {
		$path_info='/';
	}
	$path_info=substr($path_info,1);
	$pathInfos=explode('/',$path_info);
	if(strlen($pathInfos[0])==0) {
		$path='index';
		$pathname='index';
	}elseif(count($pathInfos)==2) {
		$path=$pathInfos[0];
		$pathname=$pathInfos[1];
	}elseif(count($pathInfos)==1) {
		$path='index';
		$pathname=$pathInfos[0];
	}
	include('./views/'.$path.'/'.%pathname.'.html');

 ?>