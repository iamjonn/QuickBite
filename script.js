const form = document.getElementById("encurtador");
const input = document.getElementById("link");
const resultsContainer = document.querySelector('.results')
const popup = document.querySelector('.popup')
const Bcomp = document.getElementById('Bcompartilhar');


const API_URL = 'https://api.shrtco.de/v2'

form.addEventListener('submit', async function(event) {
  event.preventDefault()
  
  const inputValue = input.value

  const result = await fetch (`${API_URL}/shorten?url=${inputValue}`)

  const shortedResult = await result.json()

  resultsContainer.innerHTML = ` <div class="result">
  <p id = "Linkvelho" >${shortedResult.result.original_link}</p>
  <div class="shorted">
    <p>${shortedResult.result.short_link}</p>
    <button onclick="copyToClipboard()">Copiar</button>
  </div>
   </div> `

    // Adicione o link encurtado à lista no popup
  const listItem = document.createElement("li");
  listItem.textContent = shortedResult.result.short_link;
  shortenedLinksList.appendChild(listItem);

})

function copyToClipboard() {
  const copyTextElement = document.querySelector('.shorted p')

  navigator.clipboard.writeText(copyTextElement.textContent)

  popup.classList.add('active')
  

  setTimeout(function () {
    popup.classList.remove('active')
  }, 4000);

}

document.getElementById("Bcompartilhar").addEventListener("click", function() {
  var textToCopy = "Olá! Estou usando um incrível encurtador de links que torna tudo mais fácil. Confira o meu site: [ site encurtador de links]. É rápido, seguro e conveniente. Experimente agora mesmo!";
  
  
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  
  
  document.body.appendChild(textarea);
  
  
  textarea.select();
  document.execCommand("copy");
  
  
  document.body.removeChild(textarea);
  
  popup.classList.add('active')
  

  setTimeout(function () {
    popup.classList.remove('active')
  }, 4000);

  Bcomp.innerHTML = "Compartilhado <img src='/QuickBite/logos/mandar.png'>";
  
  // Desabilita o botão após o clique
  
  Bcomp.disabled = true;

  setTimeout(function() {
    Bcomp.disabled = false;
    Bcomp.innerHTML = "Compartilhar <img src='/QuickBite/logos/mandar.png'>";
  }, 5000);

});


