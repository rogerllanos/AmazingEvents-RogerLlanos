
let allCards = document.getElementById("containerCard")
let pastData ;


fetch("https://mindhub-xj03.onrender.com/api/amazing ")
.then(answer => answer.json())
.then( date => {
     cardsDate = date.events 
    currentDate =date.currentDate
    console.log(currentDate);
    pastData= cardsDate.filter(cardPast => cardPast.date < currentDate)

    showCard(pastData, allCards)
    printBoxes(pastData,checkBoxes)

})
.catch(error=> console.log(error))




let checkBoxes = document.getElementById("containerCheckBox")



function printBoxes(data ,container){
    let showBoxes =data.map(box => box.category)
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
    let checkFilter = crossedFilter(pastData,inputValue, arrayCheck)
    showCard(checkFilter,allCards)
})  
function filterCard(array,box){
    const aux = array.filter(card => card.box == box)
   
}

// -------------

let inputSearch = document.getElementById("search")


inputSearch.addEventListener("input",(e)=>{
    inputValue = e.target.value
    let cardFilter = crossedFilter(pastData,inputValue, arrayCheck);
    allCards.innerHTML=""
    showCard(cardFilter, allCards)

})


