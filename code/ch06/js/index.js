// 乐购商城首页js
//当页面加载完毕
$(function(){
    /*首页大图轮播*/
    $('#bannerInner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    // 图书电子书小轮播
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#fff",//当前控制按钮的颜色
    });
    // 新书列表手风琴效果
    $('.ebooks .right-box ul > li').mouseenter(function(){
        //所有兄弟：隐藏详情显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();
        //当前：显示详情 隐藏标题
        $(this).find('.ebooks-title').hide();//隐藏标题
        $(this).find('.desc').show();//显示详情
    });
    $('#clothes-banner').tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#fff",//当前控制按钮的颜色
    });
    $('#sports-banner').tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#fff",//当前控制按钮的颜色
    });
    $('#children-banner').tyslide({
        boxh:340,//盒子的高度
        w:430,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#fff",//当前控制按钮的颜色
    });
    $('.promotion .title ul li').mouseenter(function(){
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active');
        //内容的切换
        //获取对应的索引号
        var index = $(this).index();
        //左右移动
        $('.promotion .content .inner-box').animate({
            'left': -index * 1200
        })
    });

})
