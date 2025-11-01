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
        error()
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
                            <p class="cardingredientes"><span class="spancard">ingredientes: </span>${receta.ingredientes.join(", ")}</p> 
                            <p class="cardinstrucciones"><span class="spancard">instrucciones: </span>${receta.instrucciones}</p>
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
            draggable: true,
            background: "#222222",
            iconColor: "#ffcc00",
            color: "#ffffff",
            confirmButtonColor: "#ffcc00",
            buttonhoverColor: "#ff8b07"
        })
    } else {
        Swal.fire({
            title: "Bienvenido/a " + nombre,
            icon: "success",
            draggable: true,
            background: "#222222",
            iconColor: "#ffcc00",
            color: "#ffffff",
            confirmButtonColor: "#ffcc00",
            buttonhoverColor: "#ff8b07"
        })
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
        Swal.fire({
            title: "No tienes recetas guardadas",
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
    favdiv.innerHTML = ""

    guardadas.forEach(r => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<h3 class="cardnombre">${r.nombre}</h3>
                            <p class="cardingredientes"><span class="spancard">ingredientes: </span> ${r.ingredientes.join(", ")}</p>
                            <p class="cardinstrucciones"><span class="spancard">instrucciones: </span> ${r.instrucciones}</p>
                            <button id="${r.id}" class="button favquitar">Quitar de favoritos</button>`
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

