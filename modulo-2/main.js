console.log("Hola Mundo");

let  micho = 5
micho = 75
console.log(micho);
var tucu = 80
tucu = 90
console.log(tucu);


// Ejercicios

//N1
console.log("Hola Mundo");

//N2
let nombre = "Thomy"
let edad = 23
let mayorEdad = true
const direccion = {direc: "CABA"}
const coloresFavoritos = ["verde","azul","violeta","gris"]
const lenguajesFavoritos = ["JavaScript","Phyton","Java"]
let mejorLenguaje = lenguajesFavoritos[0]
let peorLenguaje = lenguajesFavoritos[2]
console.log(peorLenguaje);

//N3
let numero1 = 25

let numero2 = 30

console.log(numero1 + numero2);

//N4
let saludo = "Hola"
if (saludo === "Hola") {
    console.log("Ha saludado");
    
}


//N4
const pokemones = ["Bulbasaur","Charmander","Squirtle"]

pokemones.forEach(elements => {
    console.log(elements);
});

for (const elements of pokemones) {
    console.log(elements);
}

console.log(pokemones[0],pokemones[1],pokemones[2]);

let i = 0
while (i !== pokemones.length ) {
    console.log(pokemones[i]);
    i++
}

const pokemonesTipos = [
    {nombre: "a", tipo: "fuego"},
    {nombre: "b", tipo: "agua"},
    {nombre: "c", tipo: "fuego"}
]

pokemonesTipos.forEach(elements => {
    if (elements.tipo === "fuego"){
        console.log(`el pokemon ${elements.nombre} es de tipo fuego 🔥`);
    
    }
});

for (const pokemon of pokemonesTipos) {
    if (pokemon.tipo === 'fuego') {
     console.log('¡Es un pokemon de fuego! 🔥');
    }
}


function probando(x,y){
    console.log(x,y);

}

const colores  = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = colores.filter((x) => x % 2 == 0)
console.log(numerosPares);


let people = [
    {id:3,first_name:"Luz"}
]

let person = people.find( p =>{
    let test;
    test = p.id === 3
    return test
})

console.log(person);


//Parte 3 Bucles y metodos del array


const personajes = [
    {id: 1, nombre: "jaime", familia:"lannister", edad: 34},
    {id: 2, nombre: "arya", familia:"stark", edad: 11},
    {id: 3, nombre: "oberyn", familia:"martell", edad: 41},
    {id: 4, nombre: "sansa", familia:"stark", edad: 13},
    {id: 5, nombre: "micho", familia:"tuvi", edad: 13},
]

personajes.forEach((elements)=>{
    console.log(elements.nombre);
})

let miembrosFamilia = {}
personajes.forEach((personaje)=>{
    if(miembrosFamilia[personaje.familia]){
        miembrosFamilia[personaje.familia]++
    
        
    }
    else{
        miembrosFamilia[personaje.familia] = 1
        

    }
})

console.log(miembrosFamilia);

array = [1,2,3]

console.log(array[0]);


let x = {}

personajes.forEach((personaje)=>{
    if(x[personaje.edad]){
        //Si x que esta vacio por ahora, contiene al elemento de personaje.edad
        //Entonces lo sume, no ocurre hasta el ultimo caso
        x[personaje.edad] = x[personaje.edad] + x[personaje.edad]
    }
    else{
        //si x no lo contiene, ese elemento entra al objeto y tiene valor de uno
        x[personaje.edad] = 1
        

    }
    
})
console.log(x);

const filterStark = personajes.filter(element => element.familia === "stark")
console.log(filterStark);

const findSansa = personajes.find(element => element.nombre === "sansa")
console.log(findSansa);








