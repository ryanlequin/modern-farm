//console.log("Welcome to the main module")

//imports form other modules
import { createPlan } from './plan.js'
import { harvestPlants } from './harvester.js'
import { plantCatalog } from './catalog.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'

//invoking the function
const yearlyPlan = createPlan()

//console.log("yearlyPlan".yearlyPlan)

//invoke plantSeeds and pass it to yearlyPlan
plantSeeds(yearlyPlan)

//invoke usePlants and set = plantCopy variable
const plantsInTheField = usePlants()

//console.log("plantCopy".plantsInTheField)

//invoke harvest plants
const plants = harvestPlants(plantsInTheField)

//console.log("plants".plants)

//invoke plantCatalog and pass it to the plant array as argument, then console log it.
const variableOfPlantCatalog = plantCatalog(plants)

//console.log('variableOfPlantCatalog'.variableOfPlantCatalog)

//variable is storing queryselector for HTML section to input JS automation of plants.
let parentHTMLElement = document.querySelector('.plant-list') // missing the . smh
//storing HTML repo of all plant catalog to this variable.
parentHTMLElement.innerHTML = variableOfPlantCatalog  
