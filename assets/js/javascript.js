document.addEventListener('DOMContentLoaded', function() {
    // Toggle Menu function
    function toggleMenu() {
        let navLeft = document.querySelector('.nav-left');
        let navRight = document.querySelector('.nav-right');
        let navLogo = document.querySelector('.nav-right img');

        console.log("Toggle Menu function called");
        console.log(window.innerWidth); // ウィンドウ幅を出力

        if (window.innerWidth <= 769) {
            // nav-left と nav-right の表示を切り替え
            navLeft.classList.toggle('show');
            navRight.classList.toggle('show');
            navLogo.classList.toggle('hide');
            console.log("Classes toggled");
        }
        console.log("window.innerWidth is OK");
    }

    const hamburger = document.getElementById('hamburger-menu');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    console.log("Toggle Menu is OK");

    // adjustHeight function
    function adjustHeight() {
        let products1Height = document.querySelector('.products-1').offsetHeight;
        let products2Height = document.querySelector('.products-2').offsetHeight;

        let totalHeight = products1Height + products2Height;
        let productsContainer = document.querySelector('.products');

        console.log("products-1 height:", products1Height);
        console.log("products-2 height:", products2Height);
        console.log("Total height to set:", totalHeight);

        productsContainer.style.height = totalHeight + 'px';
        console.log("Total height adjusted:", totalHeight);
    }

    // adjustHeightを実行
    adjustHeight();
    window.onresize = adjustHeight; // リサイズ時にも調整

    // スライドショーのコード
    $(document).ready(function() {
        let slideCount = $('#about-slider ul li').length;
        let slideWidth = $('#about-slider ul li').width();
        let currentIndex = 0;

        setInterval(function() {
            currentIndex = (currentIndex + 1) % slideCount;
            $('#about-slider ul').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px');
        }, 20000);
        console.log("Slide is OK");
    });
});

function goToHome() {
    window.location.href = 'index.html'; // home.html に遷移する例
}
