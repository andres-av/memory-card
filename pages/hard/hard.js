import {generateCards, restart, startCountdown} from '../js-utils/utils.js'


const hardCards = [
    {imgSrc: `url("../../assets/hard/3d-printing.jpeg")`, name: "3d printing"},
    {imgSrc: `url("../../assets/hard/ai.jpeg")`, name: "ai"},
    {imgSrc: `url("../../assets/hard/atomic-bomb.jpeg")`, name: "atomic bomb"},
    {imgSrc: `url("../../assets/hard/DNA.jpeg")`, name: "DNA"},
    {imgSrc: `url("../../assets/hard/drone.jpeg")`, name: "drone"},
    {imgSrc: `url("../../assets/hard/electric-car.jpeg")`, name: "electric car"},
    {imgSrc: `url("../../assets/hard/nuclear-power.jpeg")`, name: "nuclear power"},
    {imgSrc: `url("../../assets/hard/quantum-computer.jpeg")`, name: "quantum computer"},
    {imgSrc: `url("../../assets/hard/smartphone.jpeg")`, name: "smartphone"},
    {imgSrc: `url("../../assets/hard/spaceship.jpeg")`, name: "spaceship"},
    {imgSrc: `url("../../assets/hard/telescope.jpeg")`, name: "telescope"},
    {imgSrc: `url("../../assets/hard/television.jpeg")`, name: "television"},
    {imgSrc: `url("../../assets/hard/vaccine.jpeg")`, name: "vaccine"},
    {imgSrc: `url("../../assets/hard/www.jpeg")`, name: "www"},
    {imgSrc: `url("../../assets/hard/videogames.jpeg")`, name: "videogames"},
    {imgSrc: `url("../../assets/hard/3d-printing.jpeg")`, name: "3d printing"},
    {imgSrc: `url("../../assets/hard/ai.jpeg")`, name: "ai"},
    {imgSrc: `url("../../assets/hard/atomic-bomb.jpeg")`, name: "atomic bomb"},
    {imgSrc: `url("../../assets/hard/DNA.jpeg")`, name: "DNA"},
    {imgSrc: `url("../../assets/hard/drone.jpeg")`, name: "drone"},
    {imgSrc: `url("../../assets/hard/electric-car.jpeg")`, name: "electric car"},
    {imgSrc: `url("../../assets/hard/nuclear-power.jpeg")`, name: "nuclear power"},
    {imgSrc: `url("../../assets/hard/quantum-computer.jpeg")`, name: "quantum computer"},
    {imgSrc: `url("../../assets/hard/smartphone.jpeg")`, name: "smartphone"},
    {imgSrc: `url("../../assets/hard/spaceship.jpeg")`, name: "spaceship"},
    {imgSrc: `url("../../assets/hard/telescope.jpeg")`, name: "telescope"},
    {imgSrc: `url("../../assets/hard/television.jpeg")`, name: "television"},
    {imgSrc: `url("../../assets/hard/vaccine.jpeg")`, name: "vaccine"},
    {imgSrc: `url("../../assets/hard/www.jpeg")`, name: "www"},
    {imgSrc: `url("../../assets/hard/videogames.jpeg")`, name: "videogames"},
]


generateCards(hardCards)

const reset = document.getElementById("reset");
reset.addEventListener("click", restart);

window.onload = function() {
    let array = hardCards;
    startCountdown(array);
}