import { getColonies, getChosenMinerals, getGovernors, getColonyMinerals } from "./Database.js";

const colonies = getColonies()
const governors = getGovernors()
//const chosenMinerals = getChosenMinerals()

export const colonyMinerals = () => {
    const stateColony = getChosenMinerals()

    if (stateColony.chooseGovernor !== 0) {
    const foundGovernor = governors.find(governor => governor.id === stateColony.chooseGovernor)
    const foundColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
    const colonyMinerals = getColonyMinerals()
    console.log(foundColony)

    }
}