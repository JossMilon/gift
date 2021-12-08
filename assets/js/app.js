//DOM elements
const cards = document.querySelectorAll(".memory-card");

//Variables
let firstChoice = "";
let secondChoice = "";
let listOfCards = [
  "./assets/images/bigSmile.png",
  "./assets/images/pissedOff.png",
  "./assets/images/craze.png",
  "./assets/images/cool.png",
  "./assets/images/love.png",
  "./assets/images/mytho.png",
  "./assets/images/bigSmile.png",
  "./assets/images/pissedOff.png",
  "./assets/images/craze.png",
  "./assets/images/cool.png",
  "./assets/images/love.png",
  "./assets/images/mytho.png",
];

//Functions
function compare() {
  if (firstChoice != "" && secondChoice != "") {
    if (
      firstChoice.childNodes[1].getAttribute("src") ===
      secondChoice.childNodes[1].getAttribute("src")
    ) {
      firstChoice.removeEventListener("click", rotateCard);
      secondChoice.removeEventListener("click", rotateCard);
      firstChoice = "";
      secondChoice = "";
    } else {
      window.setTimeout(function () {
        firstChoice.classList.toggle("flip");
        secondChoice.classList.toggle("flip");
        firstChoice = "";
        secondChoice = "";
      }, 1000);
    }
  }
}

function rotateCard(event) {
  if (secondChoice === "") {
    event.currentTarget.classList.toggle("flip");
    const cardSelected = event.currentTarget;
    firstChoice === ""
      ? (firstChoice = cardSelected)
      : (secondChoice = cardSelected);
    compare();
  }
}

function schuffler(array) {
  let result = array;
  array.forEach((item, index) => {
    let i = Math.floor(Math.random() * array.length);
    let swap = array[i];
    result[i] = item;
    result[index] = swap;
  });
  return result;
}

//Event listeners

schuffler(listOfCards);

cards.forEach((card, index) => {
  card.childNodes[1].setAttribute("src", listOfCards[index]);
  card.addEventListener("click", rotateCard);
});
