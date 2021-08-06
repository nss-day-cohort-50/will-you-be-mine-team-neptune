import { getGovernors } from "./Database.js";

//transState = getChosenMinerals
/*
mainContainer.addEventListener("stateChanged",
    customEvent => {
        if (transState.governorId) {
            //display colony of governor
        } else {
            //display nothing
        }

    })
*/

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