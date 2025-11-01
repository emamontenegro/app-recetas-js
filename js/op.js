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
        Swal.fire({
            title: "Debes ingresar al menos un ingrediente",
            icon: "error",
            draggable: true,
            background: "#222222",
            iconColor: "#ffcc00",
            color: "#ffffff",
            confirmButtonColor: "#ffcc00",
            buttonhoverColor: "#ff8b07"
        })
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
        Swal.fire({
            title: "Sin resultados",
            text: "No encontramos recetas con esos ingredientes",
            icon: "warning",
            draggable: true,
            background: "#222222",
            iconColor: "#ffcc00",
            color: "#ffffff",
            confirmButtonColor: "#ffcc00",
            buttonhoverColor: "#ff8b07"
        })
        return
    }

    mostrarcards(resultados, "recetasingredientes")
}

// limpiar búsqueda y resultados
function limpiarBusqueda() {
    ingredientesingresados = []
    localStorage.removeItem("ingredientesingresados")
    busquedaingredientes.innerHTML = ""
    recetasingredientes.innerHTML = ""
    alimentosingresados.innerHTML = ""
}

// mostrar lista de ingredientes en pantalla
function actualizarLista() {
    if (ingredientesingresados[0] === undefined) {
        alimentosingresados.textContent = "Sin ingredientes seleccionados"
    } else {
        alimentosingresados.textContent = ingredientesingresados.join(", ")
    }
}