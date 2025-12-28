class Auto {
	constructor(rok, przebieg, cena_wyjsciowa){
	this.rok = rok;
	this.przebieg = przebieg;
	this.cena_wyjsciowa = cena_wyjsciowa;

	this.cena_koncowa = cena_wyjsciowa;
	}
		metodA(){
		this.cena_wyjsciowa = this.cena_wyjsciowa + 1000;
		}
		metodB(){
		let data = new Date().getFullYear();
		this.cena_koncowa = this.cena_wyjsciowa - ((data - this.rok)* 1000);
		}
		metodC(){
		this.cena_koncowa = this.cena_koncowa - (Math.floor(this.przebieg/100000)*10000);
		}
		metodD(nowyRok, nowyPrzebieg){
		this.rok = nowyRok;
		this.przebieg = nowyPrzebieg;
		this.metodB();
		this.metodC();
		}
}
let auta = [];
let a1 = new Auto(2024, 100000, 9000);
let a2 = new Auto(2024, 100000, 20000);
	function dopiszDoTablicy(a1){
		if	(a1.cena_koncowa > 10000){
			auta.push(a1);
		}
	}
dopiszDoTablicy(a1);
dopiszDoTablicy(a2);
console.log(auta);
	function zwiekszRok(auta){
		for (let i = 0; i < auta.length; i++) {
		auta[i].rok = auta[i].rok + 1;
		}
	}
zwiekszRok(auta);
console.log(auta);
// === TEST JEDNOSTKOWY (manualny) ===
console.log("--- ROZPOCZYNAMY TESTY ---");

let testAuto = new Auto(2020, 150000, 10000);
console.log("Start:", testAuto);

// Test metody A (zwiększenie ceny wyjściowej o 1000)
testAuto.metodA();
console.log("Po metodzie A (oczekiwane: cena_wyjsciowa 11000):", testAuto.cena_wyjsciowa);

// Test metody B (obniżka za wiek)
// Zakładając rok 2025: wiek 5 lat -> -5000 od wyjściowej
testAuto.metodB(); 
console.log("Po metodzie B (oczekiwane: cena_koncowa ~6000):", testAuto.cena_koncowa);

// Test metody C (obniżka za przebieg)
// Przebieg 150k -> 1 pełna setka -> -10000
testAuto.metodC();
console.log("Po metodzie C (oczekiwane: cena_koncowa zmniejszona o 10000):", testAuto.cena_koncowa);

// Test metody D (zmiana danych i przeliczenie)
testAuto.metodD(2024, 200000); // Nowy rok, nowy przebieg
console.log("Po metodzie D (nowe dane i przeliczona cena):", testAuto);

class Ocena {
	constructor(przedmiot, wartosc){
		this.przedmiot = przedmiot;
		this.wartosc = wartosc;
	}
}
class Student {
	constructor(imie, nazwisko){
		this.imie = imie;
		this.nazwisko = nazwisko;
		this._oceny = [];
		this.srednia = 0;
	}
	hello() {
		return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia to ${this.srednia}`;
	}
set oceny(nowaOcena){
	if (nowaOcena instanceof Ocena) {
		this._oceny.push(nowaOcena);
		// Liczenie średniej
		let suma = 0;
		for (let i = 0; i < this._oceny.length; i++) {
			suma += this._oceny[i].wartosc;
			}
		return (this.srednia = parseFloat((suma / this._oceny.length).toFixed(1)));
		}
	}
get oceny() {
	let tekst = "";
	for (let i = 0; i < this._oceny.length; i++) {
	tekst += `Przedmiot: ${this._oceny[i].przedmiot} - ocena ${this._oceny[i].wartosc}.`;
		}
	return tekst;
	}
}
let s = new Student('Jan','Kowalski');
console.log(s.hello());
s.oceny = new Ocena('WPR', 4);
s.oceny = new Ocena('TIN', 3);
s.oceny = new Ocena('POJ', 2);
console.log(s.oceny);
console.log(s.hello());

// Tabela Samochody DOM

//1. DANE
const samochody = [
	{ rok: 2006, przebieg: 300000, cena_wyjsciowa: 50000, cena_koncowa: 30000 },
	{ rok: 2016, przebieg: 50000, cena_wyjsciowa: 80000, cena_koncowa: 65000 },
	{ rok: 2006, przebieg: 302000, cena_wyjsciowa: 55000, cena_koncowa: 38000 }
];

//2. TWORZENIE TABELI I NAGŁÓWKA
const tabela = document.createElement('table');
tabela.style.borderCollapse = "collapse"; // Łączy podwójne ramki w jedną
tabela.style.width = "100%";
const naglowekWiersz = document.createElement('tr');

// KOD TWORZĄCY NAGŁÓWKI

//const komorkaRok = document.createElement('th'); // Tworzenie komórki nagłówka
	//komorkaRok.innerText = "Rok"; // dadanie danych
	//naglowekWiersz.appendChild(komorkaRok); //Wrzucam gotowy wiersz do tabeli

//const komorkaPrzebieg = document.createElement('th'); // dodanie reszty nagłówków
	//komorkaPrzebieg.innerText = "Przebieg";
	//naglowekWiersz.appendChild(komorkaPrzebieg);

//const komorkaCena_wyjsciowa = document.createElement('th');
	//komorkaCena_wyjsciowa.innerText = "Cena_wyjsciowa";
	//naglowekWiersz.appendChild(komorkaCena_wyjsciowa);

//const komorkaCena_koncowa = document.createElement('th');
	//komorkaCena_koncowa.innerText = "Cena_koncowa";
	//naglowekWiersz.appendChild(komorkaCena_koncowa);

const naglowki = ["Rok", "Przebieg", "Cena wyjściowa", "Cena końcowa"];

naglowki.forEach(tekst => {
  const th = document.createElement('th');
  th.innerText = tekst;
  naglowekWiersz.appendChild(th);
});

// Nadanie ramki wszystkim nagłówkom za jednym razem
Array.from(naglowekWiersz.cells).forEach(komorka => {
  komorka.style.border = "1px solid black";
  komorka.style.padding = "8px";
  komorka.style.backgroundColor = "#f2f2f2";
});

tabela.appendChild(naglowekWiersz); // Wrzucenie wiersza do tabeli 

//3. PĘTLA DANYCH
samochody.forEach(auto => {

// KOD TWORZĄCY KOMÓRKI DANYCH

	//Tutaj wykonuje się kod dla każdego pojedynczego "auto" z tablicy

	const wierszDanych = document.createElement('tr');
	/*ROZWIĄZANIE PO ŁEBKACH

     //Stworzenie komórki dla: auto.rok, auto.przebieg itd.

    const komorkadanychRok = document.createElement('td'); //Tworzymy komorke danych
		//komorkadanychRok.innerText = auto.rok; // Pobieramy rok konkretnego auta
		//wierszDanych.appendChild(komorkadanychRok); //Wrzucamy komorke danych do wiersza tabeli

    const komorkadanychPrzebieg = document.createElement('td');
		//komorkadanychPrzebieg.innerText = auto.przebieg;
		//wierszDanych.appendChild(komorkadanychPrzebieg);

    const komorkadanychCena_wyjsciowa = document.createElement('td');
		//komorkadanychCena_wyjsciowa.innerText = auto.cena_wyjsciowa;
		//wierszDanych.appendChild(komorkadanychCena_wyjsciowa);

    const komorkadanychCena_koncowa = document.createElement('td');
		//komorkadanychCena_koncowa.innerText = auto.cena_koncowa;
		//wierszDanych.appendChild(komorkadanychCena_koncowa);
	*/	
	//ROZWIĄZANIE BARDZIEJ PROFESJONALNE
	const dane = [auto.rok, auto.przebieg, auto.cena_wyjsciowa, auto.cena_koncowa];

	dane.forEach(wartosc => {
    const td = document.createElement('td');
    td.innerText = wartosc;
    wierszDanych.appendChild(td);
  });

  // Nadanie ramki wszystkim komórkom w tym wierszu
  Array.from(wierszDanych.cells).forEach(komorka => {
    komorka.style.border = "1px solid black";
    komorka.style.padding = "8px";
    komorka.style.textAlign = "center";
  });
	tabela.appendChild(wierszDanych); // Wrzucamy wiersze danych do tabeli
});
document.body.appendChild(tabela);

// TABELA STUDENCI

//1.DANE
/*Standard
const studenci = [
	{
	imie: "Jan",
	nazwisko: "Kowalski",
	oceny: [
	 { przedmiot: "WPR", wartosc: 5 },
	 { przedmiot: "TIN", wartosc: 3 },
	 { przedmiot: "POJ", wartosc: 4 }
	],
	get srednia() {
        const suma = this.oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
        return (suma / this.oceny.length).toFixed(1);
    }
	},
	{
	imie: "Jan",
	nazwisko: "Paweł",
	oceny: [
	 { przedmiot: "WPR", wartosc: 3 },
	 { przedmiot: "TIN", wartosc: 3 },
	 { przedmiot: "POJ", wartosc: 4 }
	],
	get srednia() {
        const suma = this.oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
        return (suma / this.oceny.length).toFixed(1);
    }
	},
	{
	imie: "Jan",
	nazwisko: "Trzeci",
	oceny: [
	 { przedmiot: "WPR", wartosc: 5 },
	 { przedmiot: "TIN", wartosc: 5 },
	 { przedmiot: "POJ", wartosc: 4 }
	],
	get srednia() {
        const suma = this.oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0);
        return (suma / this.oceny.length).toFixed(1);
    }
	}
];
*/
//PRO
//Wykorzystanie klasy z poprzedniego ćwiczenia
const studenci = [];

const jank = new Student('Jan','Kowalski');
jank.oceny = new Ocena('WPR', 5);
jank.oceny = new Ocena('TIN', 3);
jank.oceny = new Ocena('POJ', 4);
studenci.push(jank);

const jp = new Student('Jan','Paweł');
jp.oceny = new Ocena('WPR', 3);
jp.oceny = new Ocena('TIN', 3);
jp.oceny = new Ocena('POJ', 4);
studenci.push(jp);

const jan3 = new Student('Jan','Trzeci');
jan3.oceny = new Ocena('WPR', 5);
jan3.oceny = new Ocena('TIN', 5);
jan3.oceny = new Ocena('POJ', 4);
studenci.push(jan3);

//2. PĘTLA W PĘTLI POD AKORDEON
studenci.forEach(student => {
	//2.I STWORZENIE GŁÓWNEGO KONTENERU STUDENTA
	const container = document.createElement('div');
	//2.II STWORZENIE BELKI Z NAZWISKIEM
	const header = document.createElement('div');
	header.className = 'student-header';
	header.innerText = `${student.imie} ${student.nazwisko}`;
	//2.III STWORZENIE KONTENERA OCEN
	const content = document.createElement('div');
	content.className = "student-content is-hidden";
	//2.IV PĘTLA LISTY OCEN
	let ocenyHTML = '<ul>';
	student._oceny.forEach(ocena => {
		ocenyHTML += `<li>${ocena.przedmiot}: ${ocena.wartosc}</li>`;
	});
	ocenyHTML += '</ul>';
	//2.V WRZUCENIE OCEN I ŚREDNIEJ DO ODPOWIEDNIEGO KONTENERA
	content.innerHTML = 
	`
		${ocenyHTML}
		<p><strong>Średnia: ${student.srednia}</strong></p>
	`;
	//2.VI OBSŁUGA KLIKNIĘCIA (AKORDEON)
	header.addEventListener('click', () => {
		content.classList.toggle('is-hidden'); //schowanie klasy po kliknięciu
		header.classList.toggle('active');
	});
//3.ZŁOŻENIE KODU W CAŁOŚĆ
container.appendChild(header);
container.appendChild(content);
document.body.appendChild(container);
});