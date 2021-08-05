import { getMiningFacilities } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        
        }
    }
)

export const MiningFacilities = () => {
    const facilities = getMiningFacilities()
    let html = "<ul class = 'style ul'>"

     const listItemsArray = facilities.map(
        (facility) => {
            return `<li class = "facility">
                <input type="radio" name="facility" value="${facilities.id}" /> ${facilities.name}
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}