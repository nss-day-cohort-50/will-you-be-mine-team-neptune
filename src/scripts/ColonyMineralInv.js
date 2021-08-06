import { getColonies, getChosenMinerals, getGovernors,  } from "./Database.js";

const colonies = getColonies()
const governors = getGovernors()
//const chosenMinerals = getChosenMinerals()

export const colonyMinerals = () => {
    const stateColony = getChosenMinerals()

    if (stateColony.chooseGoverner !== 0) {
    const foundGovernor = governors.find(governor => governor.id === stateColony.chooseGoverner)
    const foundColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
    console.log(foundColony)

    }
}