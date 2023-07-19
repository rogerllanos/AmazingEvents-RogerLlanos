let allCards = document.getElementById("containerCard")
let data ;

fetch("https://mindhub-xj03.onrender.com/api/amazing ")
.then(resolve => resolve.json())
.then( date => {
     cardsDate = date.events 
     console.log(cardsDate);
     data = date
     showCard(cardsDate , allCards)
     printBoxes(date,checkBoxes)
     
})
.catch(error=> console.log(error))



// function showCard(data,container){
//     if (data.length==0){
//         container.innerHTML = "<h3>No se encontro elemente</h3>"
//     }
//     for( let cards of data){
//         container.innerHTML += createCard(cards)
//     }
// }


let checkBoxes = document.getElementById("containerCheckBox")

// function createBox(box){
//     return `<div class="form-check">
//     <input class="form-check-input" type="checkbox" value="${box}" id="${box}">
//     <label class="form-check-label" for="${box}">${box}</label>    
// </div>`
// } 


function printBoxes (data,container){
    let showBoxes =data.events.map(box => box.category)
    let boxesNotRepeat = new Set(showBoxes)

    let finalBoxes = Array.from(boxesNotRepeat)
    for(let box of finalBoxes){
        container.innerHTML+=createBox(box)
    }
}

let arrayCheck = []
let inputValue=""

let checkBox = document.querySelectorAll("input[type='checkbox']")

checkBoxes.addEventListener("change",(e)=>{
    if ( e.target.checked){
         arrayCheck.push(e.target.id)
    }else if (!(e.target.checked)){
        arrayCheck = arrayCheck.filter(idcheck=> idcheck != e.target.id)
    }
    allCards.innerHTML=""
    let checkFilter = crossedFilter(data.events, inputValue, arrayCheck)
    showCard(checkFilter,allCards)
})  
function filterCard(array,box){
    const aux = array.filter(card => card.box == box)
   
}

// -------------

let inputSearch = document.getElementById("search")


inputSearch.addEventListener("input",(e)=>{
    inputValue = e.target.value
    let cardFilter = crossedFilter(data.events, inputValue, arrayCheck);
    allCards.innerHTML=""
    showCard(cardFilter, allCards)

})





