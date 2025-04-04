$(document).ready(function(){ 
    // jQuery Method go

let slideCount = $('#about-slider ul li').length;
let slideWidth = $('#about-slider ul li').width();
let currentIndex = 0;

setInterval(function(){
    currentIndex = (currentIndex + 1) % slideCount;
    $('#about-slider ul').css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px');
}, 20000)
console.log("slide is OK");
})

document.addEventListener('DOMContentLoaded', function(){   
        function toggleMenu() {
            let navLeft = document.querySelector('.nav-left');
            let navRight = document.querySelector('.nav-right');
            let navLogo = document.querySelector('.nav-right img');
            console.log("Toggle Menu function called"); // デバッグ用
            console.log(window.innerWidth); // ウィンドウ幅を出力
            if (window.innerWidth <= 400){
                navLeft.classList.toggle('show');
                navRight.classList.toggle('show');
                navLogo.classList.toggle('hide');
                console.log("Classes toggled"); // デバッグ用
            }
            console.log("window.innerWidth is OK");
        }
    document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
    console.log("Toggle Menu is OK");
});


document.addEventListener('DOMContentLoaded', function(){
    function adjustHeight(){
        let products1Height = document.querySelector('.products-1').offsetHeight;
        let products2Height = document.querySelector('.products-2').offsetHeight;
        document.querySelector('.products').styke.height = (products1Height + products2Height) + 'px';
    }
    adjustHeight();
    window.onresize = adjustHeight;
})

function goToHome(){
    window.location.href = "index.html";
}


