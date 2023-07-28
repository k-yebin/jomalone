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

/* SEARCH */
let search = document.getElementById('search')

function openSearch() {
    search.classList.add('active')
}

function closeSearch() {
    search.classList.remove('active')
}

/* note_detail(SELECT) */
function onClickSelect(e) {
    const isActive = e.currentTarget.className.indexOf("active") !== -1;
    if (isActive) {
        e.currentTarget.className = "select";
    } else {
        e.currentTarget.className = "select active";
    }
}

document.querySelector(".select").addEventListener("click", onClickSelect);

function onClickOption(e) {
    const selectedValue = e.currentTarget.innerHTML;
    document.querySelector(".select_main").innerHTML = selectedValue;
}

let optionList = document.querySelectorAll(".option");
for (let i = 0; i < optionList.length; i++) {
    let option = optionList[i];
    option.addEventListener("click", onClickOption);
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

/* BEST_SWIPER */
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
let galleryTop = new Swiper('.gallery-top', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

/* ARCODIAN */
$(document).ready(function () {
    $('.title').click(function () {
        $(this).toggleClass('on');
        var content = $(this).next('.anw');
        if (content.is(':visible')) {
            content.slideUp();
        } else {
            content.slideDown();
        }
    });
    $('.anw:first').show();
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
let cartModal = document.getElementById('cartModal')

function openCart() {
    cartModal.classList.add('active')
}

function closeCart() {
    cartModal.classList.remove('active')
}

/* SNSSWIPER */
let snsSwiper = new Swiper('#sns', {
    slidesPerView: '5',
    /* centeredSlides: true, */
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let reviewSwiper = new Swiper('#review', {
    slidesPerView: '5',
    /* centeredSlides: true, */
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-button-next .review-arrows',
        prevEl: '.swiper-button-prev .review-arrows',
    },
});