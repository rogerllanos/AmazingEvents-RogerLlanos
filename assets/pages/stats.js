let tablastack = document.getElementById("tablaSTactick")
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(info => info.json())
.then(date => {
    cardsDate = date.events
    console.log(cardsDate);
    eventshighets =cardsDate.find(card)
})
.catch(error)




let tablapastEvents = document.getElementById("tablaPast") 

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(info => info.json())
.then( date => {
    cardsDate = date.events 
   currentDate =date.currentDate
  
 
   pastData= cardsDate.filter(cardPast => cardPast.date < currentDate)
   console.log(pastData);

    let categoriaPasado = pastData.map(evento => evento.category)
        let arrayPast = Array.from(new Set(categoriaPasado))
        console.log(arrayPast);


        arrayPast.forEach(categoriaPasado => {
            revenues =0;
            asistenciaPromedio=0;

            let eventosPorCategoriaPasado = pastData.filter(eventoPasado => eventoPasado.category == categoriaPasado)
            console.log(eventosPorCategoriaPasado);
            eventosPorCategoriaPasado.forEach(evento=>{
                console.log(evento);
                revenues += evento.assistance * evento.price 
                asistenciaPromedio += calcularPorcentajeAlto(evento.assistance, evento.capacity)
                })
                revenues = revenues 
                asistenciaPromedio = asistenciaPromedio / eventosPorCategoriaPasado.length
                
                console.log(categoriaPasado, asistenciaPromedio, revenues, tablapastEvents);
               
            crearFila(categoriaPasado, asistenciaPromedio, revenues, tablapastEvents)

        });

    })
    .catch(error)




    let tablaUpcomingEvents = document.getElementById("tablaUpcoming") 

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(info => info.json())
.then(date =>{
    cardsDate = date.events 
    current = date.currentDate
    futureData= cardsDate.filter(cardFuture => cardFuture.date> current)
    console.log(futureData);
    let categoriaFuturo = futureData.map(evento => evento.category)
        let arrayUpcom = Array.from(new Set(categoriaFuturo))
        console.log(arrayUpcom);


        arrayUpcom.forEach(categoriaFuturo => {
            revenues =0;
            asistenciaPromedio=0;

            let eventosPorCategoriaFuturo = futureData.filter(eventoFuturo => eventoFuturo.category == categoriaFuturo)
            console.log(eventosPorCategoriaFuturo);
            eventosPorCategoriaFuturo.forEach(evento=>{
                revenues += evento.estimate * evento.price 
                asistenciaPromedio += calcularPorcentajeAlto(evento.estimate, evento.capacity)
                })
                revenues = revenues 
                asistenciaPromedio = asistenciaPromedio / eventosPorCategoriaFuturo.length

            crearFila(categoriaFuturo, asistenciaPromedio, revenues, tablaUpcomingEvents)

        });

    }) 
    .catch(error=> console.log(error))
  
   

function  calcularPorcentajeAlto (assistance,capacidad){
    let porcentaje =(assistance/capacidad * 100)
    return porcentaje
}

function crearFila(name, assistancePromedio, revenues, elementoHtml) {
    elementoHtml.innerHTML+=
    `<tr>
    <td>${name}</td>
    <td>$${revenues.toFixed(2)}</td>
    <td>${assistancePromedio.toFixed(2)}%</td>
    </tr>`
}


