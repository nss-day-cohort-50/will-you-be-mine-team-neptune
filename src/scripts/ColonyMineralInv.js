import { getColonies, getChosenMinerals, getGovernors, getMinerals, getColonyMinerals } from "./Database.js";


const minerals = getMinerals()
const colonies = getColonies()
const governors = getGovernors()

export const ColonyMinerals = () => {
    const chosenMinerals = getChosenMinerals()

    if (chosenMinerals.chooseGovernor !== 0) {
        const governor = governors.find(governor => governor.id === chosenMinerals.chooseGovernor)
        const colony = colonies.find(colony => colony.id === governor.colonyId)
        const colonyMinerals = getColonyMinerals()

        return `
            <h3>${colony.name} Minerals</h3>
            ${
                colonyMinerals
                    .filter(colonyMineral => colonyMineral.colonyId === colony.id)
                    .map(colonyMineral => {
                            const mineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                            return `
                            <div>${colonyMineral.mineralsAvailableTonnage} tons of ${mineral.type}</div>
                            `
                        }
                    )
                    .join("")
            }
        `
    }
    else {
        return ""
    }

}
























// const colonies = getColonies()
// const governors = getGovernors()
// //const chosenMinerals = getChosenMinerals()

// export const colonyMinerals = () => {
//     const stateColony = getChosenMinerals()

//     if (stateColony.chooseGovernor !== 0) {
//     const foundGovernor = governors.find(governor => governor.id === stateColony.chooseGovernor)
//     const foundColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
//     const colonyMinerals = getColonyMinerals()
//     console.log(foundColony)
    
//     return foundColony.name
// } else {
//     return 'Colony Name'
// }
// }