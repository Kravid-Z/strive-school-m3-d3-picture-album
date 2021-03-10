console.log('..app.js connected')

async function App() {
  const state = {
    images: []
  }

  const data = await fetch('http://www.splashbase.co/api/v1/images/latest')
  const { images } = await data.json()

  function Card(url) {
    return /*html*/ `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="${url}"" />
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
  </div>
    `
  }

  function CardList(images) {
    return /*html*/ `
      ${images.forEach((element, i) => {
        //console.log(element.url)
        return Card(element.url)
      })}
    `
  }

  document.getElementById('image-card').innerHtml = CardList(images)
}

App()

// const allCards = (prev, curr) => {
//   return prev + Cards(curr)
// }

// const getLatestImages = () => {
//   fetch('http://www.splashbase.co/api/v1/images/latest')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.images)
//       const innerHtml = images.reduce((prev, curr) => {
//         const imgUrl = curr.url
//         allCards(prev, imgUrl)
//       }, '')
//       console.log(innerHtml)
//     })
// }

// getLatestImages()

// console.log(images)
