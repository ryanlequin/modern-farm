//tiling the field

//import all seed object function
import { createPotato } from './seeds/potato.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

//variable this is going to store all the plants growing in the field
let plantsInField = []

//exporting a function
export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        plantsInField.push(seedObj[0])
        plantsInField.push(seedObj[1])
    }
    //push seedObj to empty array above
    else {
        plantsInField.push(seedObj)
    }
}

//exporting function that will return a copy of the array plantsInTheField
export const usePlants = () => {
    const copyOfPlantsInField = [...plantsInField]
    return copyOfPlantsInField
}
   