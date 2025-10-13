const listarecetas = [
    {
        tipo: "desayuno",
        nombre: "tostadas con palta",
        ingredientes: ["pan", "palta", "sal", "limón", "aceite"],
        instrucciones:"tostar 2 rebanadas de pan. aplastar 1 palta con una pizca de sal y unas gotas de limón. untar sobre el pan y rociar con un chorrito de aceite si queres.",
    },
    {
        tipo: "desayuno",
        nombre: "omelette de jamon y queso",
        ingredientes: ["huevos", "jamon", "queso", "sal", "pimienta", "manteca"],
        instrucciones: "batir 2 huevos con sal y pimienta. volcar en una sarten con un poco de manteca. cuando casi esté cocido, agregar 1-2 fetas de jamon y 1-2 fetas de queso, doblar y dejar que se funda.",
    },
    {
        tipo: "desayuno",
        nombre: "yogur con fruta y granola",
        ingredientes: ["yogur", "banana", "manzana", "frutos rojos", "granola"],
        instrucciones:"colocar en un bowl 1 taza de yogur. cortar 1 fruta (banana, manzana o frutos rojos) y mezclar. espolvorear con 3-4 cucharadas de granola.",
    },
    {
        tipo: "desayuno",
        nombre: "pancakes rápidos",
        ingredientes: ["harina", "huevo", "leche", "azúcar", "polvo de hornear", "manteca", "aceite"],
        instrucciones: "mezclar 1 taza de harina, 1 huevo, ¾ taza de leche, 1 cucharada de azúcar y 1 cucharadita de polvo de hornear hasta lograr una masa ligera. cocinar porciones en sartén con un poco de manteca hasta dorar de ambos",
    },
    {
        tipo: "almuerzo",
        nombre: "pasta con salsa de tomate y ajo",
        ingredientes: ["pasta", "pure de tomate", "ajo", "aceite", "sal", "oregano", "albahaca"],
        instrucciones: "hervir 200 g de pasta en agua con sal. Saltear 1 diente de ajo en aceite, agregar 1 lata o 2 tomates triturados, sal y especias. mezclar con la pasta y servir.",
    },
    {
        tipo: "almuerzo",
        nombre: "arroz salteado con verduras",
        ingredientes: ["arroz", "zanahoria", "cebolla", "pimiento", "salsa de soja", "sal", "aceite"],
        instrucciones: "picar 1 zanahoria, ½ cebolla y ½ pimiento. saltear en aceite hasta tiernos. agregar 1 taza de arroz cocido y condimentar con salsa de soja o sal.",
    },
    {
        tipo: "almuerzo",
        nombre: "ensalada cesar",
        ingredientes: ["lechuga", "pollo", "pan", "queso rallado", "aderezo", "aceite", "sal", "pimienta"],
        instrucciones: "Cortar 1 lechuga en trozos. cocinar 1 pechuga de pollo y cortarla en tiras. tostar 2 rebanadas de pan en cubos para croutones. mezclar con queso rallado y aderezo (puede ser 2 cucharadas de mayonesa + jugo de ½ limón + 1 cucharadita de mostaza).",
    },
    {
        tipo: "almuerzo",
        nombre: "supremas al horno con pure",
        ingredientes: ["pollo", "pan rallado", "huevo", "sal", "pimienta", "aceite", "papas", "leche", "manteca"],
        instrucciones: "pasar 1 pechuga de pollo fileteada por 1 huevo batido y pan rallado. hornear a 200 °C por 20 minutos, dando vuelta a la mitad. para el pure: hervir 3-4 papas en agua con sal, pisar y mezclar con ½ taza de leche y 1 cucharada de manteca. servir juntos.",
    },
    {
        tipo: "merienda",
        nombre: "tostadas con manteca y mermelada",
        ingredientes: ["pan", "manteca", "mermelada"],
        instrucciones: "tostar 2 rebanadas de pan, untar con manteca y cubrir con mermelada.",
    },
    {
        tipo: "merienda",
        nombre: "budin de pan",
        ingredientes: ["pan", "huevo", "leche", "azucar", "canela"],
        instrucciones: "desmenuzar 2 rebanadas de pan en un bowl. agregar 1 huevo, ½ taza de leche, 1 cucharada de azúcar y canela. cocinar en microondas 2-3 minutos.",
    },
    {
        tipo: "merienda",
        nombre: "banana con mantequilla de mani",
        ingredientes: ["banana", "mantequilla de mani", "granola"],
        instrucciones: "cortar 1 banana en rodajas. untar con 2 cucharadas de mantequilla de mani y espolvorear con granola.",
    },
    {
        tipo: "merienda",
        nombre: "quesadillas rapidas",
        ingredientes: ["tortillas", "queso", "jamon", "verduras", "manteca", "aceite"],
        instrucciones: "rellenar 2 tortillas con queso rallado y, si queres, jamon o verduras. cocinar en sarten hasta dorar y fundir el queso.",
    },
    {
        tipo: "cena",
        nombre: "sopa de verduras",
        ingredientes: ["zanahoria", "papa", "cebolla", "caldo", "sal", "pimienta"],
        instrucciones: "pelar y cortar 1 zanahoria, 1 papa y 1 cebolla. cocinar en 1 litro de agua con un cubito de caldo hasta tiernas. Triturar si se prefiere cremosa.",
    },
    {
        tipo: "cena",
        nombre: "tortilla de papa",
        ingredientes: ["papa", "huevo", "cebolla", "aceite", "sal"],
        instrucciones: "cortar 2-3 papas en rodajas y freirlas hasta tiernas. mezclar con 2 huevos batidos y ½ cebolla picada. cocinar en sartén por ambos lados hasta dorar.",
    },
    {
        tipo: "cena",
        nombre: "revuelto de zapallitos",
        ingredientes: ["zapallitos", "huevo", "cebolla", "aceite", "sal", "pimienta"],
        instrucciones: "picar ½ cebolla y saltear en aceite. agregar 2 zapallitos en cubos y cocinar hasta tiernos. añadir 2 huevos batidos, mezclar hasta que cuaje.",
    },
    {
        tipo: "cena",
        nombre: "fajitas de pollo",
        ingredientes: ["tortillas", "pollo", "cebolla", "pimiento", "aceite", "sal", "pimienta", "pimenton"],
        instrucciones: "cortar en tiras 1 pechuga de pollo, ½ cebolla y ½ pimiento. saltear en sarten con aceite, sal, pimienta y pimenton. rellenar tortillas y servir.",
    },
]

//registrar usuario
let aceptar = document.getElementById("aceptar")
aceptar.addEventListener("click", mostrarsaludo)

function mostrarsaludo() {
    let nombre = document.getElementById("nombre").value
    nombre.placeholder = "Ej: Emanuel"
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
                            <p class="cardinstrucciones"><span>instrucciones: </span>${receta.instrucciones}</p>`
    contenedorcards.appendChild(mainCard)
})
}

//receta recoendada del dia

function recetarecomendada() {
    let deldia = document.getElementById("deldia")
    deldia.innerHTML = ""
    let indice = Math.floor(Math.random()*16)
    let recetarandom = [listarecetas[indice]]
    mostrarcards(recetarandom, "deldia")
    
}
document.addEventListener("DOMContentLoaded", recetarecomendada)

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
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("opciones").addEventListener("click", mostraropciones)
})

// que tenes en tu heladera

const poringredientes = document.getElementById("poringredientes")
poringredientes.addEventListener("click", mostraringredientes)
let ingredientesingresados = []
let contadoringredientes = 0

function mostraringredientes() {
    const busquedaingredientes = document.getElementById ("busquedaingredientes")

    busquedaingredientes.innerHTML = ""

    if (document.getElementById("inputingrediente")) {
        return
    }

    let guardados = localStorage.getItem("ingredientesingresados")
    if (guardados) {
        ingredientesingresados = JSON.parse(guardados)
        contadoringredientes = 0
        for(const i of ingredientesingresados) {
            contadoringredientes++
        }
        document.getElementById("alimentosingresados").innerHTML = ingredientesingresados.join(", ")
    }

    let input = document.createElement("input")
    input.className = "input"
    input.id = "inputingrediente"
    input.placeholder = "Ingresa un ingrediente"

    let botonagregar = document.createElement("button")
    botonagregar.className = "button"
    botonagregar.id = "agregaringrediente"
    botonagregar.innerHTML = "Agregar Ingrediente"

    let botonbuscar = document.createElement("button")
    botonbuscar.className = "button"
    botonbuscar.id = "Buscarreceta"
    botonbuscar.innerHTML = "Buscar"

    let botonlimpiar = document.createElement("button")
    botonlimpiar.className = "button"
    botonlimpiar.id = "limpiaringredientes"
    botonlimpiar.innerHTML = "Eliminar búsqueda"

    busquedaingredientes.appendChild(input)
    busquedaingredientes.appendChild(botonagregar)
    busquedaingredientes.appendChild(botonbuscar)
    busquedaingredientes.appendChild(botonlimpiar)

    botonagregar.addEventListener("click", () => {
        if (input.value.trim() === "" || contadoringredientes === 3) {
            return
        } 
        let nuevos = input.value.toLocaleLowerCase().split(", ").map(i => i.trim())
        for(const ing of nuevos) {
            if (ing !== "" && contadoringredientes < 3 && !ingredientesingresados.includes(ing)) {
                ingredientesingresados.push(ing)
                contadoringredientes++
            }
        }
        input.value = ""
        let alimentosingresados = document.getElementById("alimentosingresados")
        alimentosingresados.innerHTML = ingredientesingresados.join(", ")
        localStorage.setItem("ingredientesingresados", JSON.stringify(ingredientesingresados))
    })

    botonbuscar.addEventListener("click", () => {
    if (ingredientesingresados[0] === undefined) {
        let error = document.getElementById("error")
        error.innerHTML = "Debes ingresar al menos 1 ingrediente"
        return
    }

    const recetasfilter = listarecetas.filter(receta =>
        ingredientesingresados.every(ing =>
            receta.ingredientes.some(rIng => rIng.toLowerCase().includes(ing))
        )
    )

    if (!recetasfilter[0]) {
        const  error = document.getElementById("error")
        error.innerHTML = "No tenemos recetas con este ingrediente :("
        return
    }

    let error = document.getElementById("error")
    error.innerHTML = ""
    mostrarcards(recetasfilter, "recetasingredientes")
})

    botonlimpiar.addEventListener("click", ()=> {
        ingredientesingresados = []
        contadoringredientes = 0
        let alimentosingresados = document.getElementById("alimentosingresados")
        alimentosingresados.innerHTML = "Sin ingredientes seleccionados"
        const recetasingredientes = document.getElementById("recetasingredientes")
        recetasingredientes.innerHTML = ""
        localStorage.removeItem("ingredientesingresados")
    })
}
