import { WhistlingWhilliesMines } from "./whistlingWhilliesMines.js"

const mainContainer = document.querySelector("#container")


// Below is our event listener for the state change
document.addEventListener(
    "stateChanged", 
    event => {
        console.log("State of data has changed... regenerating HTML...")
        renderHTML()
    }
)

export const renderHTML = () => {
    mainContainer.innerHTML = WhistlingWhilliesMines()
}

renderHTML()

