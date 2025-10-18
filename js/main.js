const listarecetas = [
    {
        id: 1,
        tipo: "desayuno",
        nombre: "tostadas con palta",
        ingredientes: ["pan", "palta", "sal", "limón", "aceite"],
        instrucciones:"tostar 2 rebanadas de pan. aplastar 1 palta con una pizca de sal y unas gotas de limón. untar sobre el pan y rociar con un chorrito de aceite si queres.",
    },
    {
        id: 2,
        tipo: "desayuno",
        nombre: "omelette de jamon y queso",
        ingredientes: ["huevos", "jamon", "queso", "sal", "pimienta", "manteca"],
        instrucciones: "batir 2 huevos con sal y pimienta. volcar en una sarten con un poco de manteca. cuando casi esté cocido, agregar 1-2 fetas de jamon y 1-2 fetas de queso, doblar y dejar que se funda.",
    },
    {
        id: 3,
        tipo: "desayuno",
        nombre: "yogur con fruta y granola",
        ingredientes: ["yogur", "banana", "manzana", "frutos rojos", "granola"],
        instrucciones:"colocar en un bowl 1 taza de yogur. cortar 1 fruta (banana, manzana o frutos rojos) y mezclar. espolvorear con 3-4 cucharadas de granola.",
    },
    {
        id: 4,
        tipo: "desayuno",
        nombre: "pancakes rápidos",
        ingredientes: ["harina", "huevo", "leche", "azúcar", "polvo de hornear", "manteca", "aceite"],
        instrucciones: "mezclar 1 taza de harina, 1 huevo, ¾ taza de leche, 1 cucharada de azúcar y 1 cucharadita de polvo de hornear hasta lograr una masa ligera. cocinar porciones en sartén con un poco de manteca hasta dorar de ambos",
    },
    {
        id: 5,
        tipo: "almuerzo",
        nombre: "pasta con salsa de tomate y ajo",
        ingredientes: ["pasta", "pure de tomate", "ajo", "aceite", "sal", "oregano", "albahaca"],
        instrucciones: "hervir 200 g de pasta en agua con sal. Saltear 1 diente de ajo en aceite, agregar 1 lata o 2 tomates triturados, sal y especias. mezclar con la pasta y servir.",
    },
    {
        id: 6,
        tipo: "almuerzo",
        nombre: "arroz salteado con verduras",
        ingredientes: ["arroz", "zanahoria", "cebolla", "pimiento", "salsa de soja", "sal", "aceite"],
        instrucciones: "picar 1 zanahoria, ½ cebolla y ½ pimiento. saltear en aceite hasta tiernos. agregar 1 taza de arroz cocido y condimentar con salsa de soja o sal.",
    },
    {
        id: 7,
        tipo: "almuerzo",
        nombre: "ensalada cesar",
        ingredientes: ["lechuga", "pollo", "pan", "queso rallado", "aderezo", "aceite", "sal", "pimienta"],
        instrucciones: "Cortar 1 lechuga en trozos. cocinar 1 pechuga de pollo y cortarla en tiras. tostar 2 rebanadas de pan en cubos para croutones. mezclar con queso rallado y aderezo (puede ser 2 cucharadas de mayonesa + jugo de ½ limón + 1 cucharadita de mostaza).",
    },
    {
        id: 8,
        tipo: "almuerzo",
        nombre: "supremas al horno con pure",
        ingredientes: ["pollo", "pan rallado", "huevo", "sal", "pimienta", "aceite", "papas", "leche", "manteca"],
        instrucciones: "pasar 1 pechuga de pollo fileteada por 1 huevo batido y pan rallado. hornear a 200 °C por 20 minutos, dando vuelta a la mitad. para el pure: hervir 3-4 papas en agua con sal, pisar y mezclar con ½ taza de leche y 1 cucharada de manteca. servir juntos.",
    },
    {
        id: 9,
        tipo: "merienda",
        nombre: "tostadas con manteca y mermelada",
        ingredientes: ["pan", "manteca", "mermelada"],
        instrucciones: "tostar 2 rebanadas de pan, untar con manteca y cubrir con mermelada.",
    },
    {
        id: 10,
        tipo: "merienda",
        nombre: "budin de pan",
        ingredientes: ["pan", "huevo", "leche", "azucar", "canela"],
        instrucciones: "desmenuzar 2 rebanadas de pan en un bowl. agregar 1 huevo, ½ taza de leche, 1 cucharada de azúcar y canela. cocinar en microondas 2-3 minutos.",
    },
    {
        id: 11,
        tipo: "merienda",
        nombre: "banana con mantequilla de mani",
        ingredientes: ["banana", "mantequilla de mani", "granola"],
        instrucciones: "cortar 1 banana en rodajas. untar con 2 cucharadas de mantequilla de mani y espolvorear con granola.",
    },
    {
        id: 12,
        tipo: "merienda",
        nombre: "quesadillas rapidas",
        ingredientes: ["tortillas", "queso", "jamon", "verduras", "manteca", "aceite"],
        instrucciones: "rellenar 2 tortillas con queso rallado y, si queres, jamon o verduras. cocinar en sarten hasta dorar y fundir el queso.",
    },
    {   
        id: 13,
        tipo: "cena",
        nombre: "sopa de verduras",
        ingredientes: ["zanahoria", "papa", "cebolla", "caldo", "sal", "pimienta"],
        instrucciones: "pelar y cortar 1 zanahoria, 1 papa y 1 cebolla. cocinar en 1 litro de agua con un cubito de caldo hasta tiernas. Triturar si se prefiere cremosa.",
    },
    {
        id: 14,
        tipo: "cena",
        nombre: "tortilla de papa",
        ingredientes: ["papa", "huevo", "cebolla", "aceite", "sal"],
        instrucciones: "cortar 2-3 papas en rodajas y freirlas hasta tiernas. mezclar con 2 huevos batidos y ½ cebolla picada. cocinar en sartén por ambos lados hasta dorar.",
    },
    {
        id: 15,
        tipo: "cena",
        nombre: "revuelto de zapallitos",
        ingredientes: ["zapallitos", "huevo", "cebolla", "aceite", "sal", "pimienta"],
        instrucciones: "picar ½ cebolla y saltear en aceite. agregar 2 zapallitos en cubos y cocinar hasta tiernos. añadir 2 huevos batidos, mezclar hasta que cuaje.",
    },
    {
        id: 16,
        tipo: "cena",
        nombre: "fajitas de pollo",
        ingredientes: ["tortillas", "pollo", "cebolla", "pimiento", "aceite", "sal", "pimienta", "pimenton"],
        instrucciones: "cortar en tiras 1 pechuga de pollo, ½ cebolla y ½ pimiento. saltear en sarten con aceite, sal, pimienta y pimenton. rellenar tortillas y servir.",
    },
]

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
        alert.innerHTML = "Por favor ingresa tu Nombre"
    } else {
        saludo.innerHTML = "Bienvenido/a " + nombre + "<3" 
    }
    localStorage.setItem("nombreusuario", nombre)
}

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

//receta recoendada del dia

function recetarecomendada() {
    let deldia = document.getElementById("deldia")
    deldia.innerHTML = ""
    let indice = Math.floor(Math.random()*16)
    let recetarandom = [listarecetas[indice]]
    mostrarcards(recetarandom, "deldia")
    
}
recetarecomendada()

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
        favdiv.innerHTML = "<p>No tienes recetas favoritas aún.</p>"
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
s
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
                if (rIng.toLowerCase().includes(ing.toLowerCase())) encontrado = true
            }

            if (!encontrado) cumple = false
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