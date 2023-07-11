/*******************************
 Variables
*******************************/

let phrases = [
  "Don't hold onto things that require a tight grip.",
  "Vulnerability sounds like faith and looks like courage.",
  "Look how far you've come.",
  "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
  "Little by little, one travels far.",
  "Be careful who you trust. Salt and sugar look the same.",
  "All we have to decide is what to do with the time that is given to us.",
  "One bad chapter doesn't mean your story is over.",
];
let arrayNumber = Math.round(Math.random() * phrases.length);
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");

/*******************************
 Events
*******************************/

openCookie.addEventListener("click", handleOpenCookie);
newCookie.addEventListener("click", handleNewCookie);

/*******************************
 Functions
*******************************/

function arrayNumberSelection() {
  let arrayNumberReset = Math.round(Math.random() * phrases.length);
  arrayNumber = arrayNumberReset
  console.log(arrayNumber, "entrou aqui")
  return arrayNumber
}

function handleOpenCookie(event) {
  event.preventDefault()

  toggleScreen()

  screen2.querySelector("p").innerText = phrases[arrayNumber]
}

function handleNewCookie() {
  toggleScreen()
  arrayNumberSelection()
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
