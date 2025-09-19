const nombres = [
    "tostadas con palta",
    "omelette de jamon y queso",
    "milanesas con pure",
    "ensalada cesar"
]

const ingredientes = [
    ["pan", "palta", "sal", "limon"],
    ["huevo", "jamon", "queso", "aceite"],
    ["carne", "huevo", "pan rallado", "papa"],
    ["lechuga", "pollo", "pan", "queso", "salsa cesar"]
]

const pasos = [
    "tostar el pan, pisar la palta con limon y sal, untar sobre las tostadas",
    "batir los huevos, colocar en sarten con aceite, agregar jamon y queso, doblar",
    "empanar la carne con huevo y pan rallado, freir. hacer pure con papa hervida",
    "cortar la lechuga, cocinar pollo, mezclar con pan tostado, queso rallado y salsa cesar"
]

const registrarusuario = () => {
    let nombre = prompt("Ingresá tu nombre")
    alert("Bienvenido/a " + nombre + " <3")
}

const buscarrecetas = () => {
    let ingrediente = prompt("¿Qué ingrediente tenés en la heladera?")
    let resultados = []
    let indice = 0

    for (let lista of ingredientes) {
        if (lista.includes(ingrediente)) {
            resultados.push(indice)
        }
        indice++
    }

    if (resultados[0] !== undefined) {
        console.log("Recetas encontradas con " + ingrediente + ":")
        let contador = 1
        for (let i of resultados) {
            console.log(contador + ". " + nombres[i])
            contador++
        }
    } else {
        alert("No se encontraron recetas con " + ingrediente)
    }

    return resultados
}

const mostrarreceta = indice => {
    console.log("Receta: " + nombres[indice])
    console.log("\nIngredientes: " + ingredientes[indice].join(", "))
    console.log("\nPasos: " + pasos[indice])
}

const preguntarVerRecetas = recetas => {
    for (let receta of recetas) {
        let respuesta = prompt("¿Querés ver el paso a paso de " + nombres[receta] + "? (sí/no)")
        let quiereVer = (respuesta.toLowerCase() === "si")
        if (quiereVer) {
            mostrarreceta(receta)
        }
    }
}

registrarusuario()
let recetasencontradas = buscarrecetas()

if (recetasencontradas[0] !== undefined) {
    preguntarVerRecetas(recetasencontradas)
}