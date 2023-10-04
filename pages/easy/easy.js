const section = document.querySelector("section")
const timer = document.querySelector("span")


const easyCards = [
    {imgSrc: `url("../../assets/easy/agriculture.jpeg")`, name: "agriculture"},
    {imgSrc: `url("../../assets/easy/cave-painting.jpeg")`, name: "cave-painting"},
    {imgSrc: `url("../../assets/easy/drums.jpeg")`, name: "drums"},
    {imgSrc: `url("../../assets/easy/early-tools.jpeg")`, name: "early-tools"},
    {imgSrc: `url("../../assets/easy/fire.jpeg")`, name: "fire"},
    {imgSrc: `url("../../assets/easy/hunting.jpeg")`, name: "hunting"},
    {imgSrc: `url("../../assets/easy/shelter.jpeg")`, name: "shelter"},
    {imgSrc: `url("../../assets/easy/stonehenge.jpeg")`, name: "stonehenge"},
    {imgSrc: `url("../../assets/easy/agriculture.jpeg")`, name: "agriculture"},
    {imgSrc: `url("../../assets/easy/cave-painting.jpeg")`, name: "cave-painting"},
    {imgSrc: `url("../../assets/easy/drums.jpeg")`, name: "drums"},
    {imgSrc: `url("../../assets/easy/early-tools.jpeg")`, name: "early-tools"},
    {imgSrc: `url("../../assets/easy/fire.jpeg")`, name: "fire"},
    {imgSrc: `url("../../assets/easy/hunting.jpeg")`, name: "hunting"},
    {imgSrc: `url("../../assets/easy/shelter.jpeg")`, name: "shelter"},
    {imgSrc: `url("../../assets/easy/stonehenge.jpeg")`, name: "stonehenge"},
]

// Randomize the cards array
const randomize = () => {
    const cardData = easyCards;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// Generate the Cards in the HTML document
const generateCards = () => {
    const cardData = randomize();

    // Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const cardContent = document.createElement("div");
        const cardFront = document.createElement("div");
        const cardBack = document.createElement("div");
        const cardTitle = document.createElement("div");
    
        // Attach the classes
        card.classList = "card";
        cardContent.classList = "card__content";
        cardFront.classList = "card__front";
        cardBack.classList = "card__back";
        cardTitle.classList = "card__title";

        // Attach images and names to cards
        cardBack.style.backgroundImage = item.imgSrc;
        cardTitle.innerHTML = item.name
        cardContent.setAttribute('name', item.name)

        // Attach the cards to the section container
        section.appendChild(card)
        card.appendChild(cardContent)
        cardContent.appendChild(cardFront)
        cardContent.appendChild(cardBack)
        cardBack.appendChild(cardTitle)

        card.addEventListener("click", (e) => {
            card.classList.toggle("flipCard");
            checkMatch(e);

        });
    });
}

let winProgress = 0
const checkWin = () => {
    console.log(easyCards.length);
    if(winProgress === easyCards.length/2){
        alert("Congratulations! \n You Saved our memories")
        restart();
    }
}
const checkMatch = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
            winProgress++;
            checkWin();
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                const parentCard = card.parentElement;
                setTimeout(() => parentCard.classList.remove("flipCard"), 700)
                card.classList.remove("flipped")
            });
        }
    }
}
generateCards()

// Restart 
const reset = document.getElementById("reset");
const restart = () => {
    const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.remove();
  });

  generateCards();
  winProgress = 0;
  countdownTime = 60

}
reset.addEventListener("click", restart);


// Timer 
const timeElement = document.getElementById("timer__time");

let countdownTime = 60; 
let timerInterval;

const startCountdown = () => {
  timerInterval = setInterval(updateTimer, 1000); 
}

const updateTimer = () =>  {
  if (countdownTime > 0) {
    countdownTime--; 
    timeElement.textContent = countdownTime;
  } else {
    stopCountdown();
    alert("Oh no! the virus has erased our memories! \n Try Again!")
    restart();
    countdownTime = 60
    startCountdown()
  }
}

const stopCountdown = () =>  {
  clearInterval(timerInterval); 
}

window.onload = function() {
    startCountdown(); 
}
  
