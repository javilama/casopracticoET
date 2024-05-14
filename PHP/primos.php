<?php

function numPrimo($num) {
    // Se valida que el número ingresado sea mayor que uno.
    if ($num <= 1) {
        return false;
    }
    // Se determina si el número recibido por parámetro es primo.
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i === 0) {
            return false;
        }
    }
    // Si es primo se retorna true.
    return true;
}

function getPrimos($n) {
    // Se declara un array para almacenar los números primos encontrados.
    $primos = array();
    $numero = 2; // Se inicializa con el primer número primo.

    // Se inicia la iteración hasta llegar al número ingresado por parámetro.
    while (count($primos) < $n) {
        // Se valida en la iteración si es un número primo, si lo es, se añade al nuevo array.
        if (numPrimo($numero)) {
            $primos[] = $numero; // Si el número es primo se añade al array.
        }
        $numero++;
    }

    return $primos;
}

$resultado = getPrimos(10);
print_r($resultado);

?>
