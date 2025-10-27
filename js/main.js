//importar recetas

const URL = "./db/data.json"

let listarecetas = []

function importarrecetas() {
    fetch (URL)
    .then (response => response.json())
    .then (data => {
        listarecetas = data
        recetarecomendada(data, "deldia")
    })
    .catch (error => {
        const contenedor = document.getElementById("maincard")
        if (contenedor) {
            contenedor.innerHTML = "<p class='alertmsj'>Error al cargar las recetas. Por favor, intenta nuevamente más tarde.</p>"
        }
    })
}
importarrecetas()


//cards

function mostrarcards(lista, maincardID) {
    let contenedorcards = document.getElementById(maincardID)
    contenedorcards.innerHTML = ""
    lista.forEach(receta => {
    let mainCard = document.createElement ("div")
    mainCard.className = "card"
    mainCard.innerHTML = `<h3 class="cardnombre">${receta.nombre}</h3>
                            <p class="cardingredientes"><span>ingredientes: </span>${receta.ingredientes}</p> 
                            <p class="cardinstrucciones"><span>instrucciones: </span>${receta.instrucciones}</p>
                            <button id="${receta.id}" class="button favoritosbt">Agregar a favoritos</button>`
    contenedorcards.appendChild(mainCard)
    })
    botonafavoritas()
}

//registrar usuario

let aceptar = document.getElementById("aceptar")
aceptar.addEventListener("click", mostrarsaludo)
let inputnombre = document.getElementById("nombre")
inputnombre.placeholder = "Ej: Emanuel"

function mostrarsaludo() {
    let nombre = inputnombre.value
    let saludo = document.getElementById("saludo")
    let alert = document.getElementById("alert")
    
    saludo.innerHTML = ""
    alert.innerHTML = ""
    if (nombre === "") {
        Swal.fire({
            title: "Por favor ingresa tu Nombre",
            icon: "warning",
            draggable: true
        });
    } else {
        // saludo.innerHTML = "Bienvenido/a " + nombre 
        Swal.fire({
            title: "Bienvenido/a " + nombre,
            icon: "success",
            draggable: true
});
    }
    localStorage.setItem("nombreusuario", nombre)
}

//receta recomendada del dia

function recetarecomendada() {
    let deldia = document.getElementById("deldia")
    deldia.innerHTML = ""
    let indice = Math.floor(Math.random()*16)
    let recetarandom = [listarecetas[indice]]
    mostrarcards(recetarandom, "deldia")
}

// recetas favoritas

let verfavoritas = document.getElementById("verfavoritas")
let favdiv = document.getElementById("favdiv")
let recetasfavoritas = JSON.parse(localStorage.getItem("recetasfavoritas")) || []

verfavoritas.addEventListener("click", mostrarfavoritas)

// agregar a favoritas
function botonafavoritas() {
    favboton = document.querySelectorAll(".favoritosbt")
    favboton.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const recetaID = e.currentTarget.id
            const recetaseleccionada = listarecetas.find(receta => receta.id == recetaID)

            if (!recetasfavoritas.some(receta => receta.id == recetaID)) {
                recetasfavoritas.push(recetaseleccionada)
                localStorage.setItem("recetasfavoritas", JSON.stringify(recetasfavoritas))
            }
            
        })
    })
}

// buscar receta por ID
function buscarRecetaPorID(id) {
    return listarecetas.find(receta => receta.id === id)
}

// mostrar recetas favoritas
function mostrarfavoritas() {
    if (favdiv.innerHTML !== "") {
        favdiv.innerHTML = ""
        return
    }

    const guardadas = JSON.parse(localStorage.getItem("recetasfavoritas")) || []

    if (!guardadas[0]) {
        favdiv.innerHTML = "<p class='alertmsj'>No tienes recetas favoritas aún.</p>"
        return
    }
    favdiv.innerHTML = ""

    guardadas.forEach(r => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h3 class="cardnombre">${r.nombre}</h3>
            <p class="cardingredientes"><span>ingredientes:</span> ${r.ingredientes.join(", ")}</p>
            <p class="cardinstrucciones"><span>instrucciones:</span> ${r.instrucciones}</p>
            <button id="${r.id}" class="button favquitar">Quitar de favoritos</button>
        `
        favdiv.appendChild(card)
    })

    quitarfavorita()
}

// quitar de favoritas
function quitarfavorita() {
    const botones = document.querySelectorAll(".favquitar")

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.id

            recetasfavoritas = recetasfavoritas.filter(r => r.id != id)
            localStorage.setItem("recetasfavoritas", JSON.stringify(recetasfavoritas))
            mostrarfavoritas()
        })
    })
}

// lista de opciones

const opciones = document.getElementById("opciones")
opciones.addEventListener("click", mostraropciones)
let botonesgenerados = false

function mostraropciones() {
    let veropciones = document.getElementById("veropciones")
    let recetasopciones = document.getElementById("recetasopciones")
    veropciones.innerHTML = ""
    if (botonesgenerados) {
        veropciones.innerHTML = ""
        recetasopciones.innerHTML = ""
        botonesgenerados = false
        return
    }
    const botonop = ["desayuno", "almuerzo", "merienda", "cena"]
    for(const bot of botonop) {
        let boton = document.createElement("button")
        boton.className = "button"
        boton.innerHTML = bot
        veropciones.appendChild(boton)
        boton.addEventListener("click", () => mostrardetalle(bot))
    }
    botonesgenerados = true
}

function mostrardetalle(tipocomida) {
    const recetasopciones = document.getElementById("recetasopciones")
    recetasopciones.innerHTML = ""
    const recetasFiltradas = listarecetas.filter(receta => receta.tipo === tipocomida)
    mostrarcards(recetasFiltradas, "recetasopciones")
}


// que tenes en tu heladera

const poringredientes = document.getElementById("poringredientes")
const busquedaingredientes = document.getElementById("busquedaingredientes")
const alimentosingresados = document.getElementById("alimentosingresados")
const recetasingredientes = document.getElementById("recetasingredientes")
const error = document.getElementById("error")

let ingredientesingresados = JSON.parse(localStorage.getItem("ingredientesingresados")) || []

// abrir el panel de búsqueda
poringredientes.addEventListener("click", () => {
    if (busquedaingredientes.innerHTML !== "") {
        limpiarBusqueda()
        return
    }

    busquedaingredientes.innerHTML = `
    <input id="inputingrediente" placeholder="Ingresa un ingrediente" class="input">
    <button id="agregar" class="button">Agregar</button>
    <button id="buscar" class="button">Buscar</button>
    <button id="limpiar" class="button">Eliminar búsqueda</button>`

    document.getElementById("agregar").onclick = agregarIngrediente
    document.getElementById("buscar").onclick = buscarReceta
    document.getElementById("limpiar").onclick = limpiarBusqueda
})

// agregar ingrediente a la lista
function agregarIngrediente() {
    const input = document.getElementById("inputingrediente")
    const valor = input.value.toLowerCase().trim()
    if (valor === "") return

    let repetido = false
    for (const i of ingredientesingresados) {
        if (i === valor) repetido = true
    }

    let total = 0
    for (const i of ingredientesingresados) total++

    if (!repetido && total < 3) {
        ingredientesingresados.push(valor)
        localStorage.setItem("ingredientesingresados", JSON.stringify(ingredientesingresados))
        actualizarLista()
    }

    input.value = ""
}

// buscar recetas que contengan los ingredientes ingresados
function buscarReceta() {
    if (ingredientesingresados[0] === undefined) {
        mostrarError("Debes ingresar al menos 1 ingrediente")
        return
    }

    const resultados = []

    for (const receta of listarecetas) {
        let cumple = true

        for (const ing of ingredientesingresados) {
            let encontrado = false

            for (const rIng of receta.ingredientes) {
                if (rIng.toLowerCase().includes(ing.toLowerCase())) {
                    encontrado = true
                }
            }

            if (!encontrado) {
                cumple = false
            }
        }

        if (cumple) resultados.push(receta)
    }

    if (resultados[0] === undefined) {
    mostrarError("No tenemos recetas con esos ingredientes :(")
    recetasingredientes.innerHTML = ""
    return
    }

    mostrarError("")
    mostrarcards(resultados, "recetasingredientes")
}

// limpiar búsqueda y resultados
function limpiarBusqueda() {
    ingredientesingresados = []
    localStorage.removeItem("ingredientesingresados")
    busquedaingredientes.innerHTML = ""
    recetasingredientes.innerHTML = ""
    alimentosingresados.innerHTML = ""
    mostrarError("")
}

// mostrar lista de ingredientes en pantalla
function actualizarLista() {
    if (ingredientesingresados[0] === undefined) {
        alimentosingresados.textContent = "Sin ingredientes seleccionados"
    } else {
        alimentosingresados.textContent = ingredientesingresados.join(", ")
    }
}

// mostrar errores en pantalla
function mostrarError(msg) {
    error.textContent = msg
}