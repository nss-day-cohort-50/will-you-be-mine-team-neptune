import { Governors } from "./Governors.js"
import {MiningFacilities} from "./MiningFacilities.js"
import {ColonyMinerals} from "./ColonyMineralInv.js"
import {ChosenOptions} from "./ChosenOptions.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {

            addPurchasedMinerals()
        }        
    }
)

export const WhistlingWhilliesMines = () => {
    const companyName= "Whistling Whillies Mines"
    return `
        <h1>${companyName}s! Where you get the gold, and we get the shaft.</h1>
            
        <article class="choices">
            <div class="mineralsAndFacilities">
                <section class="choices__minerals options">
                <h2>Minerals</h2>
                <section class="choices__facilities options">
                <h2>Facilities</h2>
                ${MiningFacilities()}
                </section>
            </div> 
            <div class="governorsAndColonies">
                <section class="choices__governors options">
                <h2>Governors</h2>
                ${Governors()}
                </section>
           
                <section class="choices__colonies options">
                <h2>Colonies</h2>
                ${ColonyMinerals()}
                </section>
            </div>
        </article>
        <article>
            ${ChosenOptions()}
            <button id="orderButton">Purchase all Minerals</button>
        </article>
        <article class="purchaseMinerals">
            <h2>Purchase all Minerals</h2>
           
        </article>
    `
}