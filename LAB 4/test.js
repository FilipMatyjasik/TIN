console.log("test");

function zad1(a, b, c) {
    const arr = [a, b, c].sort((x, y) => x - y);
    const [x, y, z] = arr;

    if (x*x + y*y == z*z) {
        console.log("To jest trójka pitagorejska");
    } else {
        console.log("To NIE jest trójka pitagorejska");
    }
}
    function zad2(a, b, c) {
        for (let i = a; i <= b; i++) {
            if (i % c === 0) {
                console.log(i);
            }
        }
    }

function zad3(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <=n; j++) {
            row += (i * j) + " ";
        }
        console.log(row);
    }
}

function zad4(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) console.log(b);

    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

function zad5(h) {
    for (let i = 1; i <= h; i++) {
        console.log("*".repeat(i));
    }
}

function zad6(h) {
    // Górna linia
    console.log("*".repeat(h + (h - 1)));

    for (let i = h - 1; i >= 1; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat((h - i) * 2 - 1);
        console.log(stars + spaces + stars);
    }

    // Dolna linia
    console.log("*".repeat(h + (h - 1)));
}

function zad7(figura, ...parametry) {
	switch (figura) {
		case "prostokat":
		 return poleProstokata(...parametry);
		case "trapez":
		 return poleTrapezu(...parametry);
		case "rownoleglobok":
		 return poleRownolegloboku(...parametry);
		case "trojkat":
		 return poleTrojkata(...parametry);
		default:
		 return "Nieznana figura";
	}
}

function poleProstokata(a, b){
	return a * b;
}

function poleTrapezu(a, b, h){
	return (a + b) * h / 2;
}

function poleRownolegloboku(a, h){
	return a * h;
}

function poleTrojkata(a, h){
	return a * h / 2;
}
//console.log(zad1(3, 5));