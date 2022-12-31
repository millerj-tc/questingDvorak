import {GetElementById} from "./uiUtils.js";

export function UpdateUserDeckCardCount(){
    
    const cardCountDiv = GetElementById("userDeckCardCount");
    
    const userCardHandler = window.userCardHandler;
    
    cardCountDiv.innerHTML = "Card count: " + userCardHandler.cards.length;
}