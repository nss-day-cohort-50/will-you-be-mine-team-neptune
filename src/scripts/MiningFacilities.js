import { getMiningFacilities, getChosenMinerals, setFacility } from "./Database.js";
import {colonyMinerals} from "./ColonyMineralInv.js";

const facilities = getMiningFacilities()

document.addEventListener(
        "click",
        (event) => {
            if (event.target.id.startsWith("facility--")) {
                const [, facilityId] = event.target.id.split("--")
                setFacility(parseInt(facilityId))
            }        
        }
    )
    
export const MiningFacilities = () => {
    const storage = getChosenMinerals()

    return facilities.map(facility => `

    <ul class = 'facility ul'>
        <button ${storage.chooseGovernor > 0 ? "Facilitys" : "Select Governor"}
            class = "pickFacility"
            id = "facility--${facility.id}"
        </button>

        ${storage.selectFacility === facility.id ? colonyMinerals ? colonyMinerals(facility.id) : ""
     }

     const listItemsArray = facilities.map(
        (facility) => {
            return `<li class = "facility">
                <input type="button" name="facility" value="${facility.name}" onclick="somefuntion()"/> 
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}