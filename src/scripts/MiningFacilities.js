import { getMiningFacilities } from "./database.js";


document.addEventListener(
        "click",
        (event) => {
            if (event.target.id === "facility") {
    
                addCustomOrder()
            }        
        }
    )
Display

export const MiningFacilities = () => {
    const facilities = getMiningFacilities()
    let html = "<ul class = 'facilities ul'>"

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