//I'm referencing the Unit.2.Stats.Starter for this 
// Prompt the user for a list of integers separated by commas.
let userInputString = prompt(
    "Please enter the ice cream flavors you'd like to order.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
  );

// Split the string of numbers into an array of strings.
let stringArray = userInputString.split(",")

//creating an object to keep track of each flavor in the array
function showFlavorCount(stringArray) {
    const flavorCounts = {
        coffee: 0,
        strawberry: 0,
        vanilla: 0
    };

// now counting each flavor
for(let i=0; i<stringArray.length; i++) {
    if (stringArray[i] === "coffee") {
    flavorCounts.coffee = flavorCounts.coffee + 1
    } else if (stringArray[i] !== "coffee"){
        flavorCounts.coffee = 1;
    } else {
        console.log("error - flavor not available")
    }
}

for(let i=0; i<stringArray.length; i++) {
    if (stringArray[i] === "strawberry") {
    flavorCounts.strawberry = flavorCounts.strawberry + 1
    } else if (stringArray[i] !== "strawberry"){
        flavorCounts.strawberry = 1;
    } else {
        console.log("error - flavor not available")
    }
}

for(let i=0; i<stringArray.length; i++) {
    if (stringArray[i] === "vanilla") {
    flavorCounts.vanilla = flavorCounts.vanilla + 1
    } else if (stringArray[i] !== "vanilla"){
        flavorCounts.vanilla = 1;
    } else {
        console.log("error - flavor not available")
    }
}
//showing a table of how flavors and how many ordered
console.table(flavorCounts);
}
