let paramenter= location.search
let params = new URLSearchParams(paramenter)
let id = params.get('paramenter')
console.log(id);

let detailCard = data.events.find(card => card._id === id)
console.log(detailCard);

let containerDetail = document.getElementById("sectionCard")

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
createCardDetail(containerDetail,detailCard)