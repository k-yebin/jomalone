$(document).ready(function() {
    let bannerItems = $('.top_banner li');
    let currentIndex = 0;
    // 첫 번째 배너 보이기
    bannerItems.eq(currentIndex).fadeIn();
    // 배너 자동 변경
    setInterval(function() {
        // 현재 배너 fadeOut
        bannerItems.eq(currentIndex).fadeOut(1000, function() {
            // 페이드아웃이 완료되면 다음 배너 fadeIn
            currentIndex = (currentIndex + 1) % bannerItems.length;
            bannerItems.eq(currentIndex).fadeIn();
        });
    }, 3000); // 3초마다 배너 변경
});