const section = document.querySelector("section")

// Randomize the cards array
const randomize = (array) => {
    const cardData = array;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// Generate the Cards in the HTML document
export const generateCards = (array) => {
    const cardData = randomize(array);

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
            checkMatch(e, array);

        });
    });
}

let winProgress = 0
const checkWin = (array) => {
    if(winProgress === array.length/2){
        showWinModal();
    }
}
const checkMatch = (e, array) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute('name')){
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
            winProgress++;
            checkWin(array);
        } else {
            flippedCards.forEach(card => {
                const parentCard = card.parentElement;
                setTimeout(() => parentCard.classList.remove("flipCard"), 700)
                card.classList.remove("flipped")
            });
        }
    }
}

let countdownTime = 60; 
let timerInterval;
const timeElement = document.getElementById("timer__time");


// Restart 
export const restart = (array) => {
    const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.remove();
  });

  generateCards(array)

  winProgress = 0;
  countdownTime = 60

}

// Timer 
export const startCountdown = (array) => {
  const updateTimer = () =>  {
    if (countdownTime > 0) {
      countdownTime--; 
      timeElement.textContent = countdownTime;
    } else {
      showLoseModal();
    }
  }
  timerInterval = setInterval(updateTimer, 1000); 
}

const stopCountdown = () =>  {
  clearInterval(timerInterval); 
}

// Get the modal element and close button
const loseModal = document.getElementById("lose-modal");
const winModal = document.getElementById("win-modal");

// Function to display the modal
function showLoseModal() {
  loseModal.style.display = "block";
}
function showWinModal() {
  winModal.style.display = "block";
}



