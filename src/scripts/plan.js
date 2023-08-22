
// go to main and import and inoke the createPlan function
// store value in a var called yearlyPlan and return

//array of plant
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]


//create a function to return an array of randomized plants
//exporting function
export const createPlan = () => {
    const plan = []
    //for loop thru index and push the plan and return it
    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }
    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

