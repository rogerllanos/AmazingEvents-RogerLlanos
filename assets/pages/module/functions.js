function createCard(cards){
    return `<div class="card m-3" style="width: 15rem;" id=1>
    <img class="card-img-top" src="${cards.image}"  alt="...">
    <div class="card-body">
        <h5 class="card-title">${cards.name}</h5>
        <p class="card-text text-center" style="height: 6.5rem;">${cards.description}</p>
        <div class="d-flex justify-content-between align-items-center ">
            <span>${cards.price}$</span>
            <a href="/assets/pages/details.html?paramenter=${cards._id}" class="btn btn-primary">Details</a>
        </div>  
    </div>`
}
function showCard(data,container){
    if (data.length==0){
        container.innerHTML = "<h3>No se encontro elemente</h3>"
    }
    for( let cards of data){
        container.innerHTML += createCard(cards)
    }
}

 function createBox(box){
    return `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${box}" id="${box}">
    <label class="form-check-label" for="${box}">${box}</label>    
</div>`
} 

function crossedFilter (events, filterName, categories){
    let filter = events.filter(card => {
        let valuFilter = true; 
        if (filterName !== ""){
          valuFilter = card.name.toLowerCase().includes(filterName.toLowerCase())
        }
        if(categories.length != 0 && valuFilter){
            valuFilter = categories.includes(card.category)
        }
      
        return valuFilter;
      
   })   
   return filter;
  
}





