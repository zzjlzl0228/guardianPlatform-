// 首页导航区域
$('.nav-center li').click(function () {
    $(this).addClass('active')
        .siblings()
        .removeClass('active')
})
// 右侧登录按钮
$('.login span').mouseenter(function () {
    $('.login span').css({
        color: 'green',
        borderColor: 'green'
    })
})
// 鼠标离开
$('.login span').mouseleave(function () {
    $('.login span').css({
        color: '',
        border: ''
    })
})

// 中间内容
$(window).on('scroll', function () {
    // 获取banner到文档的距离
    var v = $(window).scrollTop() / 10;
    var v1 = 200 - parseFloat(v)
    // console.log(v1)  
    $('.banner').css('top', v1)
    // 第二个主页面手机屏内部动画
    if ($(window).scrollTop() > 700 && $(window).scrollTop() < 1400) {
        $('.iphone1-img').stop().animate({
            top: 52,
            left: 0
        }, 500, 'linear');

    } else if ($(window).scrollTop() > 1400 && $(window).scrollTop() < 2100) {

        $('.phone-2-m').stop().animate({
            top: -22,
            left: 165
        }, 500, 'linear')
    } else {
        $('.iphone1-img').stop().animate({
            top: 100,
            left: 50
        }, 500, 'linear');
        $('.phone-2-m').stop().animate({
            top: 35,
            left: 116
        }, 500, 'linear')

    }



})

// 二维码显示隐藏
$('.text-right-bottom').on('mouseenter', function () {
    $('.ewm-box').css('display', 'block');
})
$('.text-right-bottom').on('mouseleave', function () {
    $('.ewm-box').css('display', 'none');
})
$('.text-right-bottom1').on('mouseenter', function () {
    $('.ewm-box-1').css('display', 'block');
})
$('.text-right-bottom1').on('mouseleave', function () {
    $('.ewm-box-1').css('display', 'none');
})



// 轮播图初始化
// $('.jcarousel').jcarousel();

// $('.prev')
//     .on('jcarouselcontrol:active', function() {
//         $(this).removeClass('inactive');
//     })
//     .on('jcarouselcontrol:inactive', function() {
//         $(this).addClass('inactive');
//     })
//     .jcarouselControl({
//         target: '-=1'
//     });

// $('.next')
//     .on('jcarouselcontrol:active', function() {
//         $(this).removeClass('inactive');
//     })
//     .on('jcarouselcontrol:inactive', function() {
//         $(this).addClass('inactive');
//     })
//     .jcarouselControl({
//         target: '+=1'
//     });

// $('.controls')
//     .on('jcarouselpagination:active', 'a', function() {
//         $(this).addClass('active1');
//     })
//     .on('jcarouselpagination:inactive', 'a', function() {
//         $(this).removeClass('active1');
//     })
//     .jcarouselPagination();




var index = 0;
// 【右侧按钮实现轮播下一项】
$('.next').click(function () {
    // 找到轮播当前项，淡出隐藏
    $('.jcarousel li').eq(index).fadeOut(500);
    // 找到当前的小点，样式恢复默认
    $('.controls a').eq(index).removeClass('active1');
    index++;
    // 限制索引
    if (index > $('.jcarousel li').length - 1) {
        index = 0;
    }
    // 下一个轮播项淡入显示
    $('.jcarousel li').eq(index).fadeIn(500);
    // 找到当前的小点，样式突出显示
    $('.controls a').eq(index).addClass('active1');

});


$('.prev').click(function () {
    // 找到轮播当前项，淡出隐藏
    $('.jcarousel li').eq(index).fadeOut(500);
    // 找到当前的小点，样式恢复默认
    $('.controls a').eq(index).removeClass('active1');
    index--;
    // 限制索引
    if (index < 0) {
        index = $('.jcarousel li').length - 1;
    }

    // 下一个轮播项淡入显示
    $('.jcarousel li').eq(index).fadeIn(500);
    // 找到当前的小点，样式突出显示
    $('.controls a').eq(index).addClass('active1');

});


$('.controls a').click(function () {
    // 找到轮播当前项，淡出隐藏
    $('.jcarousel li').eq(index).fadeOut(500);
    // 找到当前的小点，样式恢复默认
    $('.controls a').eq(index).removeClass('active1');
    // 获取当前小点的索引，更改index
    index = $(this).index();
    // 下一个轮播项淡入显示
    $('.jcarousel li').eq(index).fadeIn(500);
    // 找到当前的小点，样式突出显示
    $('.controls a').eq(index).addClass('active1');
});
var timer;

function autoPlay() {
    timer = setInterval(function () {
        $('.next').click();
    }, 2000)
}
autoPlay();

// 鼠标进入轮播区停止自动轮播
$('.jcarousel').mouseenter(function (event) {
    clearInterval(timer);
});

// 鼠标离开轮播区开启自动轮播
$('.jcarousel').mouseleave(function (event) {
    autoPlay();
});




// 在线 客服按钮
$('.service-online').on('click',function(){
    $('.log_in').css('display','block');
})


// 登录按钮
$('.login').on('click',function(){
    $('.log_in').css('display','block');
    $('.log_out').css('display','block');  
})


// 点击退出登录按钮
$('.log_out').click(function(){
    $('.log_out').css('display','none');
})
// 点击关闭按钮
$('.login_in .close').on('click',function(){
    $('.log_in').css('display','none');
})


// 点击QQ账号登录
$('#qq_login').click(function(){
    $(this).addClass('active2');
    $('#wx_login').removeClass('active2')
    $('.main-wx').css('display','none');
    $('.main-qq').css('display','block');
})


// 当鼠标放在qq二维码上时
$('.erweima').mouseenter(function(){
    $('.qq-iphone').css('display','block')
    $('.erweima').stop().animate({
        left:140
    },500,'linear');

})
$('.erweima').mouseleave(function(){
    $('.qq-iphone').css('display','none');
    $('.erweima').stop().animate({
        left:220
    },500,'linear');
})

// 点击微信登录
$('#wx_login').click(function(){
    $(this).addClass('active2');
    $('#qq_login').removeClass('active2');
    $('.main-qq').css('display','none');
    $('.main-wx').css('display','block');
})