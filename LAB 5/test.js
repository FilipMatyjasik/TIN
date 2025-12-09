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
		this.srednia = suma / this._oceny.length;
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