$(document).ready(function () {
    let bannerItems = $('.top_banner li');
    let currentIndex = 0;
    // 첫 번째 배너 보이기
    bannerItems.eq(currentIndex).fadeIn();
    // 배너 자동 변경
    setInterval(function () {
        // 현재 배너 fadeOut
        bannerItems.eq(currentIndex).fadeOut(1000, function () {
            // 페이드아웃이 완료되면 다음 배너 fadeIn
            currentIndex = (currentIndex + 1) % bannerItems.length;
            bannerItems.eq(currentIndex).fadeIn();
        });
    }, 3000); // 3초마다 배너 변경
});

/* header active class */
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.header_wrap, .btn_top').addClass('active')
    } else {
        $('.header_wrap, .btn_top').removeClass('active')
    }
})

$(function () {
    $('.lnb_title , .lnb_dep2').hover(
        function () {
            $('header').addClass('hovered');
        },
        function () {
            $('header').removeClass('hovered');
        }
    );
});

/* 장바구니 모달 내 카운트 */
function count(type) {
    const resultElement = document.getElementById('result');

    let number = resultElement.innerText;

    if (type === 'plus') {
        number = parseInt(number) + 1;
    } else if (type === 'minus') {
        number = parseInt(number) - 1;
    }

    resultElement.innerText = number;
}

/* CART(MODAL)*/
$('.cart').click(function() {
    $('#cartModal').css('display', 'block');
});

$('.cart_modal_close').click(function() {
    $('#cartModal').css('display', 'none');
});

/* SEARCH */
let search = document.getElementById('search')

function openSearch() {
    search.classList.add('active')
}

function closeSearch() {
    search.classList.remove('active')
}

/* BTN_TOP */
$(function () {
    $(".btn_top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
        return false;
    })
});

$(document).ready(function () {
    $(".over").click(function () {
        $(".sub_visual_over").css({
            "opacity": "1",
            "visibility": "visible"
        });
    });
    $(".back").click(function () {
        $(".sub_visual_over").css({
            "opacity": "0",
            "visibility": "hidden"
        });
    });
});