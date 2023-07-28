window.addEventListener('DOMContentLoaded', function () {

    let roller = document.querySelector('.roller');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.rolling_wrap').appendChild(clone);

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');
});

/* header active class */
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.header_wrap, .btn_top').addClass('active');
        $('.gnb .search img').attr('src', './main/main_images/gnb_serach(black).png');
        $('.gnb .my_page img').attr('src', './main/main_images/mypage_icon(black).png');
        $('.gnb .cart img').attr('src', './main/main_images/gnb_cart(black).png');
    } else {
        $('.header_wrap, .btn_top').removeClass('active');
        $('.gnb .search img').attr('src', './main/main_images/gnb_serach.png');
        $('.gnb .my_page img').attr('src', './main/main_images/mypage_icon.png');
        $('.gnb .cart img').attr('src', './main/main_images/gnb_cart.png');
    }
});

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

$(function () {
    $('header').hover(
        function () {
            $('.gnb .search img').attr('src', './main/main_images/gnb_serach(black).png');
            $('.gnb .my_page img').attr('src', './main/main_images/mypage_icon(black).png');
            $('.gnb .cart img').attr('src', './main/main_images/gnb_cart(black).png');
        },
        function () {
            $('.gnb .search img').attr('src', './main/main_images/gnb_serach.png');
            $('.gnb .my_page img').attr('src', './main/main_images/mypage_icon.png');
            $('.gnb .cart img').attr('src', './main/main_images/gnb_cart.png');
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
$('.cart').click(function () {
    $('#cartModal').css('display', 'block');
});

$('.cart_modal_close').click(function () {
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

/* section scroll */
$(function () {
    $('.main_visual').mousewheel(function (event, delta) {
        //스크롤을 위로 움직일 때
        if (delta > 0) {
            let prev = $(this).prev().offset().top //delta가 0보다 클때 그 형을 찾고 offset의 top값을 찾아라
            $('html,body').stop().animate({
                scrollTop: prev
            }, 1000)
        } else if (delta < 0) { //스크롤을 아래로 움직일 때
            let next = $(this).next().offset().top
            $('html,body').stop().animate({
                scrollTop: next
            }, 1000)
        }
    }) //mousewheel_event
})

/* BEST_SWIPER */
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});
/* NOTE_DETAIL */
let note = document.getElementById('cologne_detail')
let note02 = document.getElementById('cologne_detail02')
let note03 = document.getElementById('cologne_detail03')
let note04 = document.getElementById('cologne_detail04')

function note_detail() {
    note.classList.add('active')
}

function close_btn() {
    note.classList.remove('active')
}

function note_detail02() {
    note02.classList.add('active')
}

function close_btn02() {
    note02.classList.remove('active')
}

function note_detail03() {
    note03.classList.add('active')
}

function close_btn03() {
    note03.classList.remove('active')
}

function note_detail04() {
    note04.classList.add('active')
}

function close_btn04() {
    note04.classList.remove('active')
}

/* COLLECTION */
$('.navi li').mouseenter(function () {
    let changeImage = $(this).attr('data-img')
    $('.collection_contents').css({
        'background-image': 'url(' + changeImage + ')'
    })
})
$('.navi li').mouseleave(function () {
    $('.collection_contents').css({
        'background-image': ''
    })
})

$('.navi li').mouseenter(function () {
    $('.navi li').removeClass('on')
    $(this).addClass('on')
})
$('.navi li').mouseleave(function () {
    $('.navi li').removeClass('on')
    $('.navi li:first-child').addClass('on')
})


/* BEST_MODAL */
let modal = document.getElementById('best_modal_01')
let modal02 = document.getElementById('best_modal_02')
let modal03 = document.getElementById('best_modal_03')
let modal04 = document.getElementById('best_modal_04')
let modal05 = document.getElementById('best_modal_05')
let modal06 = document.getElementById('best_modal_06')
//'아이디'를 가져와서 변수에 넣음

function modal_01() {
    modal.classList.add('active')
}

function modal_02() {
    modal02.classList.add('active')
}

function modal_03() {
    modal03.classList.add('active')
}

function modal_04() {
    modal04.classList.add('active')
}

function modal_05() {
    modal05.classList.add('active')
}

function modal_06() {
    modal06.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}

function closeModal02() {
    modal02.classList.remove('active')
}

function closeModal03() {
    modal03.classList.remove('active')
}

function closeModal04() {
    modal04.classList.remove('active')
}

function closeModal05() {
    modal05.classList.remove('active')
}

function closeModal06() {
    modal06.classList.remove('active')
}

/* TAB_CONTENT */
$('.tab_content .tab li').click(function () {
    $('.tab_content .tab li').removeClass('on')
    $(this).addClass('on')
})

$(function () {
    $('ul.tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        $('ul.tab li').removeClass('on');
        $('.tabcont').removeClass('on');
        $(this).addClass('on');
        $('#' + activeTab).addClass('on');
    })
});

/* FINDSCENT(OPACITIY) */
window.addEventListener('scroll', function () {
    const findScentElement = document.querySelector('.find_scent');
    const findScentPosition = findScentElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 부모 요소의 좌표값
    const parentTop = findScentPosition.top;
    const parentBottom = findScentPosition.bottom;
    const parentHeight = parentBottom - parentTop;
    const parentMiddle = parentTop + parentHeight / 2;

    // 자식 요소
    const findScentThumbsElement = document.querySelector('.find_scent_thumbs');
    const findScentThumbsTitle = document.querySelector('.find_scent_thumbs .title');

    if (parentMiddle < windowHeight / 1.7) {
        // 부모 요소의 가운데가 뷰포트의 가운데에 도달하면 자식 요소의 opacity를 1로 변경
        findScentThumbsElement.style.opacity = '1';
        findScentThumbsElement.style.transition = '1.2s';
    } else {
        // 그렇지 않으면 자식 요소의 opacity를 0으로 유지
        findScentThumbsElement.style.opacity = '0';
        findScentThumbsElement.style.transition = '1.2s';
    }
});

/* findscent */
document.getElementById("startLink").addEventListener("click", function (e) {
    e.preventDefault();
    showNextQuestion("content_01");
});

function showNextQuestion(questionId) {
    let question = document.getElementById(questionId);
    question.style.display = "block";
    document.querySelector(".find_scent_content").style.display = "block";

    if (questionId === "content_01") {
        document.getElementById("cafe").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("content_02");
        });

        document.getElementById("hot").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("content_03");
        });
    } else if (questionId === "content_02") {
        document.getElementById("friend").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("answer_01");
        });

        document.getElementById("plan").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("answer_02");
        });
    } else if (questionId === "content_03") {
        document.getElementById("flower_01").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("answer_01");
        });

        document.getElementById("flower_02").addEventListener("click", function (e) {
            e.preventDefault();
            question.style.display = "none"
            showNextQuestion("answer_02");
        });
    } else {}
}

/* SNSSWIPER */
let snsSwiper = new Swiper('#sns', {
    slidesPerView: '5',
    loop: true,
    loopAdditionalSlides: 1,
    loopedSlides: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* BTN_TOP */
$(function () {
    $(".btn_top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
        return false;
    })
});