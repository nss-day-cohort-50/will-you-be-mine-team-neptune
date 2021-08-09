import { getMiningFacilities, getChosenMinerals, setFacility } from "./Database.js";
import {FacilityMinerals} from "./FacilityMinerals.js";

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
        <button ${storage.chooseGovernor > 0 ? "Facility" : "Select Governor"}
            class = "pickFacility"
            id = "facility--${facility.id}"
        </button>

        ${
            storage.selectFacility === facility.id ? ColonyMinerals(facility.id) : ""
     }
     </ul>
         `).join("")
}

  
     
     
     
     
    