// const age1 = 21;
// const age2 = 10;

// if (age2 > 18) {
//     console.log("Es mayor de edad!!");
// } else {
//     console.log("Es menor de edad!!");
// }

// const city = "Moquegua";

// switch (city) {
//     case "Lima": 
//         console.log("City: Lima"); 
//         console.log("Hay envío"); 
//         break;
//     case "Arequipa": 
//         console.log("City: Lima"); 
//         console.log("Hay envío limitado por distritos"); 
//         break;
//     case "Cusco": 
//         console.log("City: Lima"); 
//         console.log("No hay envío"); 
//         break;
//     default: console.log("Por defecto se ejecuta esta línea")
// }

// const list = ["Lavar", "Cocinar", "Tender cama"];

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// console.log(list[list.length - 1])


const myFirstFunction = function () {
    console.log("Esta es mi primera función");
}

// myFirstFunction();

// console.log(myFirstFunction());


const dividir = function (n1, n2) {
    return n1 / n2;
}

// console.log(dividir(10, 15));


const button = document.querySelector("#button");
const input = document.querySelector("#input");
console.log(input);

const onClickFunction = function () {
    console.log("El botón ha sido clickeado!")
}

button.addEventListener("click", function (e) {
    console.log(e);
});

input.addEventListener("keypress", function (e) {
    console.log(e.key)
})

window.addEventListener("resize", function () {
    console.log(window.innerWidth)
    if (this.window.innerWidth > 768) {
        console.log("Estamos en una pc/laptop")
    } else {
        console.log("Estamos en un dispositivo móvil")
    }
})

window.addEventListener("scroll", function () {
    console.log("hola")
})

