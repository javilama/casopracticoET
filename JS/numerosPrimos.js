function numPrimo(num) {
    // se valida que el numero ingresado sea mayor que uno.
    if (num <= 1) {
        return false;
    }
    //se determina si el numero recibido por parametro es primo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num % i)
            return false;
        }
    }
    //si es primo se retorna true
    return true;
}

function getPrimos(n) {
    //se declara un array para almacenar los numeros primos encontrados.
    const primos = [];
    let numero = 2; // se inicializa con el primer número primo
    

    //se inicia la iteracion hasta llegar al numero ingresado por parametro.
    while (primos.length < n) {
        // se valida en la iteracion si es un numero primo, si lo es, se adiciona al nuevo array.
        if (numPrimo(numero)) {
            primos.push(numero); //si el numero es primo se adiciona al array
        }
        numero++;
    }

    return console.log(primos);
}

getPrimos(1)