import {BuildCardObjectsFlow} from "./buildCardObjects/BuildCardObjectsFlow.js";
import {CardSearchFlow} from "./cardSearch/cardSearchFlow.js";

export function OnLoad(){
    BuildCardObjectsFlow();
CardSearchFlow();
}