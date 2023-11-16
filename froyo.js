//I'm referencing the Unit.2.Stats.Starter for this 
// Prompt the user for a list of integers separated by commas.
let userInputString = prompt(
    "Please enter the ice cream flavors you'd like to order.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

// Split the string of numbers into an array of strings.
let stringArray = userInputString.split(",")

// Converting strings into array
const numFlavors = [] 

//creating a loop to iterate through the array of flavors
for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    numFlavors.push(str); //I want this to keep adding any new flavors
    console.log(stringArray[i]);
  }
//creating an object to keep track of each flavor in the array
const flavorCounts = {numFlavors};

// now counting each flavor
for(const key of flavorCounts) {
    if (flavorCounts[key] = flavorCounts[key]) {
    flavorCounts = flavorCounts[key] + 1
    } else {
        flavorCounts = 1;
    }
}
//console.log(flavorCounts[key])
console.table(flavorCounts);

