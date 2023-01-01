export class cardHandler
{
    constructor(){
        
        this.cards = [];
        this.userDeck = true;
    }
    
    
    AddCard(card){
        
        const cardCopy = JSON.parse(JSON.stringify(card))
        
        if(this.DeckIncludes(card) == 4) return
        
        this.cards.push(cardCopy);
        
    }
    
    RemoveCard(card){
        
        for(const c of this.cards){
            
            if(c.cardRefNum == card.cardRefNum){
                
                console.log(card.Name);
                
                c.remove = true;
                
               break
            }
            
        }
        
        this.cards = this.cards.filter(c => c.remove != true);
        
    }
    
    DeckIncludes(card){
        
        let numberOfCard = this.cards.filter(c => c.cardRefNum == card.cardRefNum).length;
        
        return numberOfCard
    }
    
    ExportToCSV(){
        
        
    }
}