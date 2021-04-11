const translateButtonEl = document.querySelector("#translate-button");
const inputEl = document.querySelector("#translate-input");
const outputEl = document.querySelector("#translate-output");
const SERVER_URL = "https://api.funtranslations.com/translate/minion.json"

function generateFinalURL(inputText) {
  return `${SERVER_URL}?text=${encodeURI(inputText)}`;
}

function translate(event) {
  console.log("button clicked");
  const inputText = inputEl.value;
  const finalURL = generateFinalURL(inputText);
  console.log(finalURL);
  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      outputEl.innerText = json.contents.translated;
    })
    .catch(() => alert("some error occured"))

}



translateButtonEl.addEventListener("click", translate);
