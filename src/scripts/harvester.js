//create a harvester.js module with the harvestPlants function. 
//The function accepts an array of plants as input and returns
// an array of seed objects based on the output of each plant. 
export const harvestPlants = (plantsArray) => {
    let harvested = []
    //declare plant as a variable with "const"
    for (const plant of plantsArray) {
        //unknwn number of objects
        let numberOfObjects = 0
        //corn is divied in half
        if (plant.type === 'Corn') {
            numberOfObjects = plant.output / 2
        }
        else {
            numberOfObjects = plant.output
        }
        //for loop specified number of times, based on value of plant output
        for (let i = 0; i < numberOfObjects; i++) {
            //push plant to the empty seedObject array
            harvested.push(plant)
        }
    }
    return harvested
}