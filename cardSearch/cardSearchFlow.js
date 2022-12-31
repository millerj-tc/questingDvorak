
import {GetElementById, GetOrCreateDivInsideDOM, CreateElement,ClearAllChildren} from "./../uiUtils.js"
import {UpdateUserDeckCardCount} from "./../ui.js"

export function CardSearchFlow(searchmode){
    
    const returnedCards = _SearchmodeArr(searchmode);
    
    _DisplayCardsOnGrid(returnedCards);
    
}

function _SearchmodeArr(mode="allCards"){
    
    const userCardHandler = window.userCardHandler;
    const masterCardHandler = window.masterCardHandler;
    
    if(mode == "allCards") return masterCardHandler.cards;
    
    else if(mode == "cardsInDeck"){
        
        const returnArr = [];
        
        for(const c of masterCardHandler.cards){
            
            for(const uc of userCardHandler.cards){
                
                if(c.cardRefNum == uc.cardRefNum && !returnArr.includes(c)) returnArr.push(c);
            }
        }
        
        return returnArr
        
    }
        
    else if(mode == "cardsNotInDeck"){
        
        const returnArr = [];
        
        for(const c of masterCardHandler.cards){
            
            let matchFound = 0;
            
            for(const uc of userCardHandler.cards){
                
                if(c.cardRefNum == uc.cardRefNum) matchFound = 1;
            }
            
            if(matchFound == 0) returnArr.push(c);
        }
        
        return returnArr
        
    }
    
    else if(mode == "set2Only"){
        
        const returnArr = [];
        
        for(const c of masterCardHandler.cards){
            
            if(c.Set == "Set 2") returnArr.push(c);
        }
        
        return returnArr
        
    }
        
        
    
}

function _DisplayCardsOnGrid(cardArr){
    
    const cardGridDisplay = GetElementById("cardGridDisplay");
    
    ClearAllChildren(cardGridDisplay);
    
    for(const card of cardArr){
        
        const userCardHandler = window.userCardHandler;
    
        const cardImageDiv = CreateElement("div");

        cardImageDiv.classList.add("cardImageDiv");

        const cardImageControls = CreateElement("div");

        cardImageControls.classList.add("cardImageControls");

        const cardImageDecButton = CreateElement("button");

        cardImageDecButton.innerHTML = "-";

        const cardImageNumIndic = CreateElement("div");

        console.error("should get card image number indic base value from user decklist");

        cardImageNumIndic.innerHTML = window.userCardHandler.DeckIncludes(card);

        cardImageNumIndic.classList.add("cardImageNumIndic");

        const cardImageIncButton = CreateElement("button");

        cardImageIncButton.innerHTML = "+";
        
        cardImageIncButton.onclick = function(){
            userCardHandler.AddCard(card);
            cardImageNumIndic.innerHTML = window.userCardHandler.DeckIncludes(card);
            UpdateUserDeckCardCount();
            
        }
        
        cardImageDecButton.onclick = function(){
            userCardHandler.RemoveCard(card);
            cardImageNumIndic.innerHTML = userCardHandler.DeckIncludes(card);
            console.log(window.userCardHandler.cards);
            UpdateUserDeckCardCount();
        }

        const cardImg = CreateElement("img");

        cardImg.classList.add("cardImg");

        cardImg.src = card.gitImage;

        cardImageDiv.append(cardImg);

        cardImageDiv.append(document.createElement("br"));

        cardImageDiv.append(cardImageControls);

        cardImageControls.append(cardImageDecButton);

        cardImageControls.append(cardImageNumIndic);

        cardImageControls.append(cardImageIncButton);

        cardGridDisplay.append(cardImageDiv);
        
    }
    
    
}