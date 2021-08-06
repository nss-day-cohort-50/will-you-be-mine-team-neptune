import { getGovernors, setGovernor } from "./Database.js";
import { colonyMinerals } from "./ColonyMineralInv.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governors"){
        setGovernor(parseInt(changeEvent.target.value))
        console.log("state of data has changed")
        
        colonyMinerals()
     }
    }
)

export const Governors = () => {
    const governors = getGovernors();

    let html = `<select class="governors" id="governors">
                <option value="">Choose</option>`
    
    const govHTML = governors.map(gov => {
        return `
        <option value="${gov.id}">${gov.name}</option>
        `
                       
    } )

    html += govHTML.join("")
    html += "</select>"

    return html   
}

//build find function