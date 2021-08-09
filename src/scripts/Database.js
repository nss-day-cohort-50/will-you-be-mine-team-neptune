const database = {
    governors: [
        {id: 1, colonyId: 1, name: "Stan Marsh", isActiveGov: true},
        {id: 2, colonyId: 2, name: "Eric Cartman", isActiveGov: false},
        {id: 3, colonyId: 2, name: "Mrs. Cartman", isActiveGov: true},
        {id: 4, colonyId: 3, name: "Towlie McTowel", isActiveGov: true},
        {id: 5, colonyId: 4, name: "Mr. Slave", isActiveGov: false},
        {id: 6, colonyId: 1, name: "Randy Marsh", isActiveGov: true},
        {id: 7, colonyId: 5, name: "M. Garrison", isActiveGov: true},
        {id: 8, colonyId: 2, name: "Butters Stotch", isActiveGov: false}
    ],
    colonies: [
        {id: 1, name: "SoDeSoPa"},
        {id: 2, name: "ShiTpaTown"},
        {id: 3, name: "South Park"},
        {id: 4, name: "Conifer"},
        {id: 5, name: "Canada"}
    ],
    colonyMinerals: [
        {id: 1, mineralId: 2, colonyId: 1, mineralsAvailableTonnage: 10},
        {id: 2, mineralId: 4, colonyId: 1, mineralsAvailableTonnage: 10},
        {id: 3, mineralId: 1, colonyId: 2, mineralsAvailableTonnage: 10},
        {id: 4, mineralId: 7, colonyId: 2, mineralsAvailableTonnage: 10},
        {id: 6, mineralId: 6, colonyId: 2, mineralsAvailableTonnage: 10},
        {id: 7, mineralId: 10,colonyId: 3, mineralsAvailableTonnage: 30},
        {id: 8, mineralId: 9, colonyId: 4, mineralsAvailableTonnage: 30},
        {id: 9, mineralId: 5, colonyId: 5, mineralsAvailableTonnage: 3},
        {id: 10, mineralId: 5,colonyId: 5, mineralsAvailableTonnage: 3},
        {id: 11, mineralId: 3,colonyId: 5, mineralsAvailableTonnage: 30},
    ],
    minerals: [
        {id: 1, type: "Asbestos"},
        {id: 2, type: "Copper"},
        {id: 3, type: "Gold"},
        {id: 4, type: "Iron"},
        {id: 5, type: "Lead"},
        {id: 6, type: "Lithium"},
        {id: 7, type: "Nickel"},
        {id: 8, type: "Platinum"},
        {id: 9, type: "Silver"},
        {id: 10, type: "Sulfer"},
    ],
    miningFacilities: [
        {id: 1, name: "City Wok", isActiveFacility: true},
        {id: 2, name: "Kenny's House", isActiveFacility: true},
        {id: 3, name: "South Park Elementary", isActiveFacility: true},
        {id: 4, name: "Whole Foods", isActiveFacility: false},
        {id: 5, name: "Tegridy Farms", isActiveFacility: true},   
    ],
    facilityMinerals: [
        {id: 1, mineralId: 2, facilityId: 1, mineralsAvailableTonnage: 200},
        {id: 2, mineralId: 4, facilityId: 1, mineralsAvailableTonnage: 250},
        {id: 3, mineralId: 1, facilityId: 2, mineralsAvailableTonnage: 200},
        {id: 4, mineralId: 7, facilityId: 2, mineralsAvailableTonnage: 200},
        {id: 6, mineralId: 6, facilityId: 2, mineralsAvailableTonnage: 300},
        {id: 7, mineralId: 10, facilityId: 3, mineralsAvailableTonnage: 300},
        {id: 8, mineralId: 9, facilityId: 4, mineralsAvailableTonnage: 300},
        {id: 9, mineralId: 5, facilityId: 5, mineralsAvailableTonnage: 300},
        {id: 10, mineralId: 5, facilityId: 5, mineralsAvailableTonnage: 300},
        {id: 11, mineralId: 3, facilityId: 5, mineralsAvailableTonnage: 300},
    ],
    purchasedMinerals: [
        
    ],
    chosenMinerals: {
        chooseGovernor: 0,
        selectFacility: 0,
        selectMinerals: new Map()
    }
}


export const getGovernors = () => {
    return database.governors.map(gov => ({...gov}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getMiningFacilities = () => {
    return database.miningFacilities.map(miningFacility => ({...miningFacility}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}
export const getChosenMinerals = () => {
    return database.chosenMinerals
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}
export const addPurchasedMinerals = () => {
    const newPurchase = {...database.chosenMinerals}
    let lastIndex = null
    if (database.purchasedMinerals.length === 0) {
        lastIndex = 0
        newPurchase.id = lastIndex +1
    } else {
        const lastIndex = database.purchasedMinerals.length -1
        newPurchase.id = database.purchasedMinerals[lastIndex].id +1
    }
    database.purchasedMinerals.push(newPurchase)
    database.chosenMinerals = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (id) => {
    database.chosenMinerals.chooseGovernor = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setFacility = (id) => {
    database.chosenMinerals.selectFacility = id
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// export const setSelectMinerals = (id) => {
//     database.chosenMinerals.selectMinerals = id
//     console.log(database.chosenMinerals)
//     document.dispatchEvent( new CustomEvent("stateChanged") )
// }

export const setSelectMinerals = (facilityMinerals) => {
    database.chosenMinerals.selectMinerals.set(facilityMinerals.facilityId, facilityMinerals.id)
    document.dispatchEvent( new CustomEvent("stateChanged") )
    console.log(database.chosenMinerals.selectMinerals)
}
