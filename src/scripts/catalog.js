// export a function named Catalog that takes an array of food objects as input. 
// terate over each food object in the array and create an HTML representation for each item using template literals. 
export const plantCatalog = (plantHarvestArray) => {

    //create a string filled with HTML syntax
    let htmlString = '<section class="plant-list">'


    //create HTML rep for each plant
    for (const plantItem of plantHarvestArray) {
         htmlString += `<div class=harvested-food">${plantItem.type}</div>`
    }
    htmlString += '</section>'

    return htmlString
}
         