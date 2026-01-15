function oblicz(){
    let a = Number(document.getElementById('liczba1').value);
    let b = Number(document.getElementById('liczba2').value);

    let operacja= document.getElementById('dzialanie').value;
    if (operacja === 'dodaj'){
        let suma = a + b;
        document.getElementById('wynik').innerText = suma;
    } else if (operacja === 'odejmij'){
        let wynik = a - b;
        document.getElementById('wynik').innerText = wynik;
    } else if (operacja === 'podziel'){
        if (b === 0){
            document.getElementById('wynik').innerText = "nie dziel przez 0 ฅ^>⩊<^ ฅ"    
        } else{
        let wynik = a/b;
        document.getElementById('wynik').innerText = wynik;
        }
    
    } else if (operacja === 'pomnoz'){
        let wynik = a*b;
        document.getElementById('wynik').innerText = wynik;

    } 
}