/* 동적데이터생성 */
import shoppingList from './data.js'

const bestProduct = document.querySelector('.best_product')

for (let i = 0; i < shoppingList.length; i++) {

    const bestDiv = document.createElement('div')
    bestDiv.setAttribute('class', 'best_box')

    const bestImg = document.createElement('img')
    bestImg.setAttribute('src', shoppingList[i].src)
    bestDiv.appendChild(bestImg)

    const bestName = document.createElement('p')
    const bestNameText = document.createTextNode(shoppingList[i].name)
    bestName.appendChild(bestNameText)
    bestDiv.appendChild(bestName)

    const bestSub = document.createElement('p')
    const bestSubText = document.createTextNode(shoppingList[i].sub)
    bestSub.appendChild(bestSubText)
    bestDiv.appendChild(bestSub)

    const bestPrice = document.createElement('p')
    const bestPriceText = document.createTextNode(shoppingList[i].price)
    bestPrice.appendChild(bestPriceText)
    bestDiv.appendChild(bestPrice)

    const bestDetail = document.createElement('p')
    const bestDetailText = document.createTextNode(shoppingList[i].detail)
    bestDetail.appendChild(bestDetailText)
    bestDiv.appendChild(bestDetail)

    bestDetail.addEventListener('click', function () {
        window.location.href = '/detail/detail.html';
    });

    bestProduct.appendChild(bestDiv)
}

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


$('.pagination ul li').click(function () {
    $('.pagination ul li').removeClass('on')
    $(this).addClass('on')
})

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

/* BTN_TOP */
$(function () {
    $(".btn_top").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
        return false;
    })
});