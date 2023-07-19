let paramenter= location.search
let params = new URLSearchParams(paramenter)
let id = params.get('paramenter')
console.log(id);
let containerDetail = document.getElementById("sectionCard")

fetch("https://mindhub-xj03.onrender.com/api/amazing ")
.then(resolve => resolve.json())
.then( date => {
     cardsDate = date.events 
     console.log(cardsDate);
     
    
     let detailCard = cardsDate.find(card => card._id == id)
    
     createCardDetail(containerDetail,detailCard)
    
     
})
.catch(error=> console.log(error))


function createCardDetail (element,objet) {
    return element.innerHTML+= 
    `<div class="d-flex flex-column flex-sm-row col-10 justify-content-around my-5" >
    <img src="${objet.image}" alt="" class="col-sm-7 object-fit-cover">
    <section class="col-sm-4 mt-4 text-center">
        <h3>${objet.name}</h3>
        <p>Date :${objet.date}</p>
        <p>${objet.description}</p>
        <p>Capacity:${objet.capacity}</p>
        <p>Price:${objet.price}$</p>
    </section>
</div> `
}
