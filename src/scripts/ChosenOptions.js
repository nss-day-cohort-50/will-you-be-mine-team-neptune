import { getChosenMinerals, getFacilityMinerals, getMinerals, getMiningFacilities } from "./Database.js"

const minerals = getMinerals()
const facilities = getMiningFacilities()
const facilityMinerals = getFacilityMinerals()


export const ChosenOptions = () => {
    const chosenMinerals = getChosenMinerals()
    let html = `<h3>You have chosen:</h3>`
    html += `<ul>`
    if (chosenMinerals.selectMinerals.size !== 0) {
        for (const [facilityId, mineralId] of chosenMinerals.selectMinerals.entries()) {
            const facilityMineral = facilityMinerals.find(facilityMineral => facilityMineral.id === mineralId)
            const facility = facilities.find(facility => facility.id === facilityMineral.facilityId)
            const mineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
            html += `<li>You have chosen 1 ton of ${mineral.type} from ${facility.name} </li>`
        }
        html += `</ul>`
    } 
    return html
}