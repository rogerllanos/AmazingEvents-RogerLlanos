{/* <div class="card m-3" style="width: 15rem;" id=1>
<img src="./assets/images/food_fair.jpg" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Festival of the collectivities</h5>
    <p class="card-text ">Enjoy your favorite dishes from different countries in a unique event for the whole family.</p>
    <span> 5$ </span>
    <a href="./assets/pages/details.html" class="btn btn-primary" > Details</a>
</div> */}
let allCards = document.getElementById("containerCard")

function createCard(cards){
    return `<div class="card m-3" style="width: 15rem;" id=1>
    <img class="card-img-top" src="${cards.image}  alt="...">
    <div class="card-body">
        <h5 class="card-title">${cards.name}</h5>
        <p class="card-text" style="height: 6.5rem;">${cards.description}</p>
        <div class="d-flex justify-content-between align-items-center ">
            <span>${cards.price}$</span>
            <a href="../pages/details.html" class="btn btn-primary">Details</a>
        </div>  
    </div>`
}
function showCard(data,container){
    for( let cards of data){
        container.innerHTML += createCard(cards)
    }
}
showCard(data.events , allCards)