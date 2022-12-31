import {cardListString} from "./../cardList.js"

export function BuildCardObjectsFlow()
{

    //UNICODE ESCAPE ERROR: must search/replace all /u in cardList.js with //u
    
    const splitCardList = cardListString.split(`@@@`);
    
    //console.log(splitCardList);
    
    const objProps = splitCardList[0].split(",$$$,");
    
    for(let i=0; i<objProps.length; i++){objProps[i] = objProps[i].replace("\n","")}
    
    for(let i=1; i<splitCardList.length; i++){_BuildCard(objProps,splitCardList[i])}
}

function _BuildCard(propList,arrayEntry){
    
    const cardObj = {};
    
    const splitArrayEntry = arrayEntry.split(",$$$,");
    
    //start on i=1 to skip "inc"
    
    for(let i=0; i<propList.length; i++){
        
        if(propList[i] == "") continue
        
        cardObj[propList[i]] = splitArrayEntry[i];
    }
    
    window.masterCardHandler.AddCard(cardObj);
    
    console.log(window.masterCardHandler.cards);
    
}
