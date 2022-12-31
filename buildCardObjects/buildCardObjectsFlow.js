import {cardListString} from "./../cardList.js"

export function BuildCardObjectsFlow()
{

    //UNICODE ESCAPE ERROR: must search/replace all /u in cardList.js with //u
    
    console.error("make sure you downloaded the js export sheet of the spreadsheet for cardListString");
    
    const splitCardList = cardListString.split(`@@@`);
    
    //console.log(splitCardList);
    
    const objProps = splitCardList[0].split(",$$$,");
    
    for(let i=0; i<objProps.length; i++){objProps[i] = objProps[i].replace("\n","")}
    
    for(let i=1; i<splitCardList.length; i++){_BuildCard(objProps,splitCardList[i],i)}
}

function _BuildCard(propList,arrayEntry,cardRefNum){
    
    const cardObj = {};
    
    const splitArrayEntry = arrayEntry.split(",$$$,");
    
    //start on i=1 to skip "inc"
    
    for(let i=0; i<propList.length; i++){
        
        if(propList[i] == "") continue
        
        cardObj[propList[i]] = splitArrayEntry[i].replace(/\"/g,"");
    }
    
    cardObj["gitImage"] = "https://millerj-tc.github.io/questingDvorak/Card%20Images/" + cardObj.Name.replace(" ","%20")+".png";
    
    cardObj.cardRefNum = cardRefNum;
    
    window.masterCardHandler.AddCard(cardObj);
    
}
