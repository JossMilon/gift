//DOM elements
const cards = document.querySelectorAll(".memory-card");

//Variables
let firstChoice = "";
let secondChoice = "";
let listOfCards = [
  "./assets/images/Jonah.png",
  "./assets/images/sentence1.png",
  "./assets/images/sentence2.png",
  "./assets/images/sentence3.png",
  "./assets/images/sentence4.png",
  "./assets/images/sentence5.png",
  "./assets/images/Jonah.png",
  "./assets/images/sentence1.png",
  "./assets/images/sentence2.png",
  "./assets/images/sentence3.png",
  "./assets/images/sentence4.png",
  "./assets/images/sentence5.png",
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
