$(function(){
    //底部菜单
    $(".weui-tabbar").on("click",".weui-bar__item--on",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //60s倒计时
    var wait=60;
    function time(o) {
            if (wait == 0) {
                o.removeAttribute("disabled");            
                o.value="获取验证码";
                wait = 60;
                $("#btn").removeClass("add-css");
            } else {
                o.setAttribute("disabled", true);
                o.value="重新发送(" + wait + ")s";
                wait--;
                setTimeout(function() {
                    time(o)
                },
                1000)
                $("#btn").addClass("add-css");
            }
        }
    document.getElementById("btn").onclick=function(){time(this);}
    //实时监控input事件
    $('.fall').bind('input propertychange', function() {
        var $this =  $(this).val().length; 
        if($this >= 1){
            $(".submit button").addClass("add-bg-css");
        }else{
            $(".submit button").removeClass("add-bg-css");
        }
    });  
});