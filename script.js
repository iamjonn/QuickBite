const form = document.getElementById("encurtador");
const input = document.getElementById("link");
const resultsContainer = document.querySelector('.results')
const popup = document.querySelector('.popup')
const Bcomp = document.getElementById('Bcompartilhar');

form.addEventListener('submit', async function(event) {
  event.preventDefault()
  
  const inputValue = input.value

  const result = await fetch (`https://tinyurl.com/api-create.php?url=${inputValue}`)

  const shortedResult = await result.text()

  resultsContainer.innerHTML = ` <div class="result">
  <p id = "Linkvelho" >${inputValue}</p>
  <div class="shorted">
    <p>${shortedResult}</p>
    <button onclick="copyToClipboard()">Copiar</button>
  </div>
   </div> `

  const listItem = document.createElement("li");
  listItem.textContent = shortedResult;
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
  


//01101010 01101111 01101110 
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
