var $j_search_post = $('#j_sc_search_post');
$j_search_post.on('click',function(){
	var $search_name_v = $('#j_cs_search_name').val(),
		$jump_args_v = $('#jump_args').val();
	// if($search_name_v!=''){
	// 	window.location.href="/school/s/"+$search_name_v+$jump_args_v+".html";
	// }else{
	// 	window.location.href="/school/s/0"+$jump_args_v+".html";
	// }
	if($search_name_v!=''){
		$.get("/school/s/"+$search_name_v+$jump_args_v+".html",function(msg){
            if(msg.status==0)
            {
				alert("Sorry,您所搜索的院校未被收录......,请选择在线咨询")
                return;
			}
			window.location.href="/school/s/"+$search_name_v+$jump_args_v+".html";
        });
	}
});
$("#j_cs_search_name").keypress(function (e){
	var key = e.which;
	if (key == 13) {
		$j_search_post.click();
	}
});
$(".school_filtrate_field dd>a").on("click",function(){
	var target_url=$(this).attr('data-href');
	$.get(target_url,function(msg){
		if(msg.status==0)
		{	alert("Sorry,您所搜索的院校未被收录......,请选择在线咨询")
			return;
			
		}
		window.location.href=target_url;
	});
})
var $this=$("#j_sc_list article");
for (var i = 0; i < $this.length; i++) {
	$nub =$this.eq(i).find('.sc_nub').html()/5*80;
	$this.eq(i).find('.cs_start_box i').css("width",$nub);
};

function no_search_infro(){
	var body_h=($(document.body).outerHeight(true))+'px';
	var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box" class="pt50 pl50 pr50 pb50 tc none"><h3><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><p class="pt50"><img alt="" src="https://imgs.sfkedu.com/static/web/2016tm/img/sub_no_infor_icon.png"></p><p class="font_26 a_333 pt40">Sorry,您所搜索的院校未被收录......</p><p class=" font_18 a_999 pt20 pb50">请选择在线咨询</p><p class="tc pt30"><a class="btn_lable2 pl50 pr50 pt15 pb15 font_18" href="http://tb.53kf.com/code/client/10147710/1" target="_blank" href="javascript:void(0);">立即咨询</a></p></div>';
	//判断成功后
	$("body").append(calendar);
	$('#j_jump_bg').fadeIn("slow");
	$("#j_jump_box").slideDown(200);
	$('.j_jump_close,#j_jump_bg').on('click',function(){
		$("#j_jump_box").remove();
		$('#j_jump_bg').remove();
		window.location.href = '/school/';
	});
}


$("#demo1").lin_gaplessPic();