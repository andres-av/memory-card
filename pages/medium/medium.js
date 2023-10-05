import {generateCards, restart, startCountdown} from '../js-utils/utils.js'

const mediumCards = [
    {imgSrc: `url("../../assets/medium/caravel.jpeg")`, name: "caravel"},
    {imgSrc: `url("../../assets/medium/chainmail.jpeg")`, name: "chainmail"},
    {imgSrc: `url("../../assets/medium/clock.jpeg")`, name: "clock"},
    {imgSrc: `url("../../assets/medium/compass.jpeg")`, name: "compass"},
    {imgSrc: `url("../../assets/medium/crossbow.jpeg")`, name: "crossbow"},
    {imgSrc: `url("../../assets/medium/gothic-architecture.jpeg")`, name: "gothic architecture"},
    {imgSrc: `url("../../assets/medium/gunpowder.jpeg")`, name: "gunpowder"},
    {imgSrc: `url("../../assets/medium/magnifying-glass.jpeg")`, name: "magnifying glass"},
    {imgSrc: `url("../../assets/medium/printing-press.jpeg")`, name: "printing press"},
    {imgSrc: `url("../../assets/medium/siege-machine.jpeg")`, name: "siege machine"},
    {imgSrc: `url("../../assets/medium/windmill.jpeg")`, name: "windmill"},
    {imgSrc: `url("../../assets/medium/castle.jpeg")`, name: "castle"},
    {imgSrc: `url("../../assets/medium/caravel.jpeg")`, name: "caravel"},
    {imgSrc: `url("../../assets/medium/chainmail.jpeg")`, name: "chainmail"},
    {imgSrc: `url("../../assets/medium/clock.jpeg")`, name: "clock"},
    {imgSrc: `url("../../assets/medium/compass.jpeg")`, name: "compass"},
    {imgSrc: `url("../../assets/medium/crossbow.jpeg")`, name: "crossbow"},
    {imgSrc: `url("../../assets/medium/gothic-architecture.jpeg")`, name: "gothic architecture"},
    {imgSrc: `url("../../assets/medium/gunpowder.jpeg")`, name: "gunpowder"},
    {imgSrc: `url("../../assets/medium/magnifying-glass.jpeg")`, name: "magnifying glass"},
    {imgSrc: `url("../../assets/medium/printing-press.jpeg")`, name: "printing press"},
    {imgSrc: `url("../../assets/medium/siege-machine.jpeg")`, name: "siege machine"},
    {imgSrc: `url("../../assets/medium/windmill.jpeg")`, name: "windmill"},
    {imgSrc: `url("../../assets/medium/castle.jpeg")`, name: "castle"},
]

generateCards(mediumCards)

const reset = document.getElementById("reset");
reset.addEventListener("click", restart);

window.onload = function() {
    let array = mediumCards;
    startCountdown(array);
}