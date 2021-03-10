console.log('..app.js connected, by Kravidz')


const Card = (url) => {
    return `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
        <img class="" src="${url}"/>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`
}

const createCardsFor = (prev,curr)=>{
    return prev+Card(curr)
}

const getimg = () => {
    fetch("http://www.splashbase.co/api/v1/images/latest").then(response => response.json()).then(
        data => {
            const {images} = data;
            
            
           const cards = images.reduce((prev,{url})=>createCardsFor(prev,url),"")
           const row = document.getElementById("entryPoint")
           
           row.innerHTML=""
           row.innerHTML=cards
        }
    )
}