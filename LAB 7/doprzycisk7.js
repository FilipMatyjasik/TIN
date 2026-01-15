const mojPrzycisk = document.getElementById('przycisk1');
const kontener = document.getElementById('kontener1');
const przyciskUsuwania = document.getElementById('przycisk2');
const kolorowyPrzycisk = document.getElementById('przycisk3');
const kontener3 = document.getElementById('kontener3');
const nowyTekst = document.getElementById('przycisk4');

// 1. Dodawanie elementu
mojPrzycisk.addEventListener('click', function(){
    const nowyDiv = document.createElement("div");
    nowyDiv.innerText = "Nowy Div";
    nowyDiv.classList.add("do-usuniecia");
    // Dla estetyki dodajmy jakiś styl, żeby było widać te divy
    nowyDiv.style.border = "1px solid black";
    nowyDiv.style.margin = "5px";
    
    kontener.appendChild(nowyDiv);
});

// 2. Usuwanie PIERWSZEGO elementu (POPRAWKA)
przyciskUsuwania.addEventListener('click', function(){
    const usunDiv = document.querySelectorAll('.do-usuniecia');
    
    // Sprawdzamy czy cokolwiek jest do usunięcia
    if (usunDiv.length > 0) {
        // Usuwamy element o indeksie 0 (czyli pierwszy z brzegu)
        usunDiv[0].remove(); 
    }
});

// 3. Zmiana koloru DIVA NR 3
kolorowyPrzycisk.addEventListener('click', function(){
    // Zmieniamy tło kontenera3 (diva nr 3)
    kontener3.style.backgroundColor = "red";
});

// 4. Zmiana tekstu we wszystkich divach
nowyTekst.addEventListener('click', function(){
    // Pobieramy przyciski ORAZ stworzone divy
    // Uwaga: querySelectorAll('div') zmieniłoby tekst w całej strukturze, 
    // więc celujemy w te elementy, które mają tekst
    const stworzoneDivy = document.querySelectorAll('.do-usuniecia');
    
    // Zmieniamy tekst w nowo dodanych divach
    stworzoneDivy.forEach(function(element){
        element.innerText = "nowy tekst";
    });
});