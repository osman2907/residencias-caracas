const recibos = {
    [2023]: [
        {
            id: 202310,
            anio: 2023,
            mes: "10",
            mes_descripcion: "Octubre",
            imagen: "ResCaracas202310.jpeg"
        },
        {
            id: 202307,
            anio: 2023,
            mes: "07",
            mes_descripcion: "Julio",
            imagen: "ResCaracas202307.jpeg"
        }
    ],
    [2022]: [
        {
            id: 202312,
            anio: 2023,
            mes: "12",
            mes_descripcion: "Diciembre",
            imagen: "ResCaracas202212.jpg"
        },
        {
            id: 202311,
            anio: 2023,
            mes: "11",
            mes_descripcion: "Noviembre",
            imagen: "ResCaracas202211.jpg"
        }
    ]
}

const selectAnio = document.querySelector("#select-anio");
const selectMes = document.querySelector("#select-mes");
const imgRecibo = document.querySelector("#img-recibo");
selectAnio.innerHTML = ''
selectMes.innerHTML = ''
let primero = true
for (const item of Object.keys(recibos).sort((a, b) => b - a)) {
    const selected = primero ? 'selected' : ''
    selectAnio.innerHTML += `<option value="${item}" ${selected}>${item}</option>`
    if(primero) {
        for (const mes of recibos[item]) {
            const selected = primero ? 'selected' : ''
            selectMes.innerHTML += `<option value="${mes.id}" ${selected}>${mes.mes_descripcion}</option>`
            if(primero) {
                imgRecibo.classList.remove("d-none")
                imgRecibo.setAttribute("src", `./assets/img/recibos/${mes.imagen}`)
            }
            primero = false
        }
    }
}

selectAnio.addEventListener("change", function(event) {
    const anio = event.target.value
    let primero = true
    selectMes.innerHTML = ''
    for (const mes of recibos[anio]) {
        const selected = primero ? 'selected' : ''
        selectMes.innerHTML += `<option value="${mes.id}" ${selected}>${mes.mes_descripcion}</option>`
        if(primero) {
            imgRecibo.setAttribute("src", `./assets/img/recibos/${mes.imagen}`)
        }
        primero = false
    }
})

selectMes.addEventListener("change", function(event) {
    const mes = event.target.value
    const anio = selectAnio.value

    console.log("Año", anio);
    console.log("Mes", mes);
    const busqueda = recibos[anio].find(item => item.id == mes)
    imgRecibo.setAttribute("src", `./assets/img/recibos/${busqueda.imagen}`)
})