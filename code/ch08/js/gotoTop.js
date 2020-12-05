/** 
 * 返回顶部函数功能封装
 * 2020-11-20
 * 付文杨
 */

$(function(){
    //把函数  挂载在window上  暴露出去
    window.gotoTop = function (){
    //准备结构
    var $gotoTopHtml = $('<div class="backToTop"><img src="./images/gototop_05.jpg"></div>');

        //写样式定位
        $('gotoTopHtml').css({
                width: '30px',
                height: '50px',
                bottom: '100px',
                position: 'fixed',
                marginLeft: '50%',
                left: '600px',
                display: 'none',
        });
        //返回顶部的js代码
        // 返回顶部
    // 绑定滚动事件
    $(document).scroll(function(){
        //获取距离顶部的位置
        var topDistance = $('html,body').scrollTop();
        //判断
        if(topDistance > 500){
            $('.backToTop').fadeIn();
        }else{
            $('.backToTop').fadeOut();
        }
    })
    //返回顶部功能
    $('body').on('click','.backToTop',function(){
        // alert('111')
        $('html,body').animate({
             scrollTop:0
         },300)
    })
    //追加到页面的尾部
    $('body').append($gotoTopHtml)
}
})