// const grilla = document.querySelector(".grilla")
// const parrafoConHijo = document.querySelector("#parrafoConHijo")
// const hijoDelParrafo = document.querySelector("span")

// hijoDelParrafo.parentElement // parrafoConHijo
// parrafoConHijo.children // siempre nos devuelve una coleccion --> no es lo mismo que hijoDelParrafo

// // previousElementSibling
// // nextElementSibling 
// // crear elementos de html 
// const lista = document.createElement("ul")
// const li = document.createElement("li")
// li.textContent = "Este es texto agregado desde JS"
// li.style.color = "pink"
// li.classList.add("li-rosa")

// lista.appendChild(li)
// grilla.appendChild(lista)

// grilla.removeChild(grilla.children[5])
// grilla.innerHTML = ""


// Callbacks 

const mostrarEnConsola = (mensaje) => {
  console.log(mensaje)
}
const funcionQueRecibeOtraFuncion = (funcion) => {
  funcion("estoy adentro de una funcion")
}

funcionQueRecibeOtraFuncion(mostrarEnConsola)



setTimeout(() => {
  console.log("Pasaron 2 segundos")
}, 2000)

