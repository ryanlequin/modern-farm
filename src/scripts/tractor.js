//sowing the field with the tractor
// define and export plantSeeds function
//function accept the year's planting plan yearly as input
//invoke seed functiond
//take that seed and add it to the seed array of plants in the module.

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

//itreate the function through the array of plants stored in createPlan
// take seeds and add them to array in plantd in field module.

//defined and export function
export const plantSeeds = (plan) => {
    //loops thorough parent array
    for (let i = 0; i < plan.length; i++) {
        //loops through each child array
        for (let j = 0; j < plan[i].length; j++) {
            //plan [i][j] is each item in each nested array
            if (plan[i][j] === 'Potato') {
                //invoked the function
                const potatoSeed = createPotato()
                //sow potato seed by invoking addPlant and adding potatoSeed as agument
                addPlant(potatoSeed)
                //contine with each plant
            }
            if (plan[i][j] === 'Corn') {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            if (plan[i][j] === 'Asparagus') {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            if (plan[i][j] === 'Soybean') {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            if (plan[i][j] === 'Sunflower') {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            if (plan[i][j] === 'Wheat') {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
}