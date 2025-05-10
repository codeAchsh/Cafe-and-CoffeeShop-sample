document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLeft = document.querySelector(".nav-left");
    const navRight = document.querySelector(".nav-right");
    const navLogo = document.querySelector(".nav-right img");

    function toggleMenu() {
        console.log("Toggle Menu function called");
        console.log("Window width:", window.innerWidth);

        if (window.innerWidth <= 769) {  
            navLeft.classList.toggle("show");
            navRight.classList.toggle("show");
            navLogo.classList.toggle("hide");
            console.log("Classes toggled");
        }
    }

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", toggleMenu);
    }

    console.log("Toggle Menu is OK");
});

    // adjustHeight function
    function adjustHeight() {
        let products1 = document.querySelector('.products-1');
        let products2 = document.querySelector('.products-2');
        let productsContainer = document.querySelector('.products');
    
        // 要素が見つからなければ処理を終了
        if (!products1 || !products2 || !productsContainer) {
            console.warn("products-1 または products-2 または .products が見つかりません");
            return;
        }
    
        let products1Height = products1.offsetHeight;
        let products2Height = products2.offsetHeight;
        let totalHeight = products1Height + products2Height;
    
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


function goToHome() {
    window.location.href = 'index.html'; // home.html に遷移する例
}
