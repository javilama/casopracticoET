
//FORMA 1 

function longitudCadenasArray(arrayNombres) {
  // se utiliza el metodo .map para recorrer el array, las longitudes se asignan a una nueva variable y esta se imprime por consola.
  const longitud = arrayNombres.map(nombre => nombre.length) 
  return console.log(longitud)
}
//se invoca o ejecuta la funcion pasando por parametro el array de nombres
longitudCadenasArray(['Carlos', 'Pedro', 'Elisenda'])


//FORMA 2
// Igual que la forma 1, solo que se usa arrow function
const longitudCadenasArray2 = (arrayNombres)=> console.log(arrayNombres.map(nombre => nombre.length))

longitudCadenasArray2(['Carlos', 'Pedro', 'Elisenda'])



//FORMA 3
// esta funcion devuelve cada nombre al lado de su longitud.

function longitudCadenasArray3(arrayNombres) {
    return arrayNombres.map(nombre => {
        const longName = nombre.length
        
        return `${nombre}: ${longName} Caracteres`;
    
    });
}

const nombres_3 = ['Carlos', 'Pedro', 'Elisenda'];
const longitudes = longitudCadenasArray3(nombres_3);
longitudes.forEach(res => console.log(res)) 









