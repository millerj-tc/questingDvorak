import {BuildCardObjectsFlow} from "./buildCardObjects/buildCardObjectsFlow.js";
import {CardSearchFlow} from "./cardSearch/cardSearchFlow.js";

export function OnLoad(){
    BuildCardObjectsFlow();
    CardSearchFlow();
}