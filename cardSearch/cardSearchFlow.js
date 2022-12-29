export function cardSearchFlow(){
    
    let returnedCards = CardsThatMeetSearchFilters();
    
    DisplayCardsOnGrid(returnedCards);
}