let allCards = document.getElementById("containerCard")

function createCard(cards){
    return `<div class="card m-3" style="width: 15rem;" id=1>
    <img class="card-img-top" src="${cards.image}  alt="...">
    <div class="card-body">
        <h5 class="card-title">${cards.name}</h5>
        <p class="card-text" style="height: 6.5rem;">${cards.description}</p>
        <div class="d-flex justify-content-between align-items-center ">
            <span> ${cards.price}$ </span>
            <a href="./details.html?paramenter=${cards._id}" class="btn btn-primary" > Details</a>
        </div>
    </div>`
}

function filter (events,current){ //array , string 
    let futureData= []
    for (let event of events) {
       if (current < event.date) {
          futureData.push(event)
       } 
    }
    return futureData
}
let futureData = filter(data.events,data.currentDate)

function showCard(futureData,container){
    if (futureData.length==0){
        container.innerHTML = "<h3>No se encontro elemente</h3>"
    }
    for( let cards of futureData){
        container.innerHTML += createCard(cards)
    }
}
showCard(futureData, allCards)
// -----
let checkBoxes = document.getElementById("containerCheckBox")

function createBox(box){
    return `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${box}" id="${box}">
    <label class="form-check-label" for="${box}">${box}</label>    
</div>`
} 

let showBoxes =futureData.map(box => box.category)
let boxesNotRepeat = new Set(showBoxes)

let finalBoxes = Array.from(boxesNotRepeat)
console.log(finalBoxes);

function printBoxes (array,container){
    for(let box of array){
        container.innerHTML+=createBox(box)
    }
}
printBoxes(finalBoxes,checkBoxes)

const arrayCheck = []
let inputValue=""

let checkBox = document.querySelectorAll("input[type='checkbox']")

checkBoxes.addEventListener("change",(e)=>{
    filterCard(futureData,e.target.value)
    if ( e.target.checked){
         arrayCheck.push(e.target.id)
    }else if (!(e.target.checked)){
        arrayCheck.pop(e.target.id)
    }
    allCards.innerHTML=""
    let checkFilter = crossedFilter(inputValue, arrayCheck)
    showCard(checkFilter,allCards)
})  
function filterCard(array,box){
    const aux = array.filter(card => card.box == box)
   
}

// -------------

let inputSearch = document.getElementById("search")
let showName = futureData.map(name =>name.name )
let nameMed = new Set(showName)
let finalName = Array.from(nameMed)



inputSearch.addEventListener("input",(e)=>{
    inputValue = e.target.value
    inputValue.toLowerCase()
    let cardFilter = crossedFilter(inputValue, arrayCheck);
    allCards.innerHTML=""
    showCard(cardFilter, allCards)

    console.log(inputValue);
})


 function crossedFilter (filterName,categories){
     let filter = futureData.filter(card => {
         let valuFilter = true; 
         if (filterName !== ""){
           valuFilter = card.name.toLowerCase().includes(filterName.toLowerCase())
         }
         if(categories.length != 0 && valuFilter){
             valuFilter = categories.includes(card.category)
         }
       
         return valuFilter;
       
    })   
    console.log(filterName);
    console.log(categories);
    return filter;
   
}