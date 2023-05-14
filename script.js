const form = document.getElementById("encurtador");
const input = document.getElementById("link");
const resultsContainer = document.querySelector('.results')
const popup = document.querySelector('.popup')

const API_URL = 'https://api.shrtco.de/v2'

form.addEventListener('submit', async function(event) {
  event.preventDefault()
  
  const inputValue = input.value

  const result = await fetch (`${API_URL}/shorten?url=${inputValue}`)

  const shortedResult = await result.json()

  resultsContainer.innerHTML = ` <div class="result">
  <p>${shortedResult.result.original_link}</p>
  <div class="shorted">
    <p>${shortedResult.result.short_link}</p>
    <button onclick="copyToClipboard()">Copiar</button>
  </div>
   </div> `

})

function copyToClipboard() {
  const copyTextElement = document.querySelector('.shorted p')

  navigator.clipboard.writeText(copyTextElement.textContent)

  popup.classList.add('active')
  

  setTimeout(function () {
    popup.classList.remove('active')
  }, 2000);

}