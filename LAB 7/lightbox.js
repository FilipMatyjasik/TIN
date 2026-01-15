const zdjecia = ["lightbox1.jpg", "lightbox2.jpg", "lightbox3.jpg", "lightbox4.jpg"];
let aktualnyIndeks = 0;

function odswiezLightbox() {
    const img = document.getElementById("duzeZdjecie");
    
    console.log("Próba wczytania zdjęcia: " + zdjecia[aktualnyIndeks]);

    img.src = zdjecia[aktualnyIndeks];
    
    const licznik = document.getElementById("licznik");
    if (licznik) {
        licznik.innerHTML = (aktualnyIndeks + 1) + " / " + zdjecia.length;
    }

    img.classList.remove("animacja-fade");
    void img.offsetWidth; 
    img.classList.add("animacja-fade");
}

function otworzLightbox(indeks) {
    aktualnyIndeks = indeks;
    const modal = document.getElementById("mojLightbox");
    
    modal.style.display = "flex";
    odswiezLightbox();
}

function zamknijLightbox() {
    document.getElementById("mojLightbox").style.display = "none";
}

function zmienSlajd(n) {
    aktualnyIndeks += n;

    if (aktualnyIndeks >= zdjecia.length) aktualnyIndeks = 0;
    if (aktualnyIndeks < 0) aktualnyIndeks = zdjecia.length - 1;

    odswiezLightbox();
}

window.onclick = function(event) {
    const modal = document.getElementById("mojLightbox");
    if (event.target == modal) {
        zamknijLightbox();
    }
}