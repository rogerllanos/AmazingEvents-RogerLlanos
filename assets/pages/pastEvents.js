let allCards = document.getElementById("containerCard")

function createCard(cards){
    return `<div class="card m-3" style="width: 15rem;" id=1>
    <img class="card-img-top" src="${cards.image}  alt="...">
    <div class="card-body">
        <h5 class="card-title">${cards.name}</h5>
        <p class="card-text" style="height: 6.5rem;">${cards.description}</p>
        <div class="d-flex justify-content-between align-items-center ">
            <span> ${cards.price}$ </span>
            <a href="./assets/pages/details.html" class="btn btn-primary" > Details</a>
        </div>    
    </div>`
}

function filter (events,current){ //array , string 
    let newData= []
    for (let event of events) {
       if (current > event.date) {
          newData.push(event)
       } 
    }
    return newData
}
let newData = filter(data.events,data.currentDate)

function showCard(newData,container){
    for( let cards of newData){
        container.innerHTML += createCard(cards)
    }
}
showCard(newData, allCards)