const banners = ["../images/Bunner1.webp", "../images/Bunner2.jpg", "../images/Bunner3.png", "../images/Bunner4.jpg", "../images/Bunner5.png"]
var bannerAtual = 0;
var intervalo = null;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    document.getElementById('imgBanner').src = banners[bannerAtual];
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function retomar() {
    intervalo = setInterval(trocarBanner, 4000);
}

intervalo = setInterval(trocarBanner, 4000);