import {generateCards, restart, startCountdown} from '../js-utils/utils.js'

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

generateCards(easyCards)

const reset = document.getElementById("reset");
reset.addEventListener("click", restart);

window.onload = function() {
    let array = easyCards;
    startCountdown(array);
}