// ==============================
// Step 2: If-else Condition
// ==============================
console.log("--- Step 2: If-Else Condition ---");
let number = 2;

if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number."); 
} else {
    console.log("The number is zero.");
}
// ==============================
// Step 3: Switch Statement
// ==============================
console.log("\n--- Step 3: Switch Statement ---");
let day = 3; // 1 = Sunday, 2 = Monday, 3 = Tuesday, etc.

switch (day) {
    case 1: console.log("Day " + day + " is Sunday"); break;
    case 2: console.log("Day " + day + " is Monday"); break;
    case 3: console.log("Day " + day + " is Tuesesday"); break;
    case 4: console.log("Day " + day + " is Wednesday"); break;
    case 5: console.log("Day " + day + " is Thursay"); break;
    case 6: console.log("Day " + day + " is Friday"); break;
    case 7: console.log("Day " + day + " is Saturday"); break;
    default: console.log("Invalid day! Enter a number between 1 and 7.");
}

// ==============================
// Step 4: Loops (For, While, Do...While)
// ==============================
console.log("\n--- Step 4: Loops ---");

console.log("For Loop output (1 to 5):");
for (let i = 1; i <= 5; i++)  {
    console.log(i);
}

console.log("While Loop output (1 to 5):");
let w = 1;
while (w <= 5)  {
    console.log(w);
    w++;
}

console.log("Do...While Loop output (1 to 5):");
let d = 1;
do {
    console.log(d);
    d++;
}  while (d <= 5);

// ==============================
// Step 5: Control Flow with break and continue
// ==============================
console.log("\n--- Step 5: Break and Continue ---");

console.log("Testing Break (stops completely at 3):");
for (let i = 1; i <= 5; i++)  {
    if (i === 3)  {
        break;
    }
    console.log(i);
}

console.log("Testing Continue (skips 3, continues with 4 and 5):");
for (let i = 1; i <= 5; i++)  {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// ==============================
// Step 6: Scope and Context
// ==============================
console.log("\n--- Step 6: Scope and Context ---");
let globalVar = "I'm global!"; // Available anywhere in the file

function scopeExample()  {
    let localVar = "I'm local!"; // Only available inside this function block
    console.log("Inside functio - globalVar: " + globalVar);
    console.log("Inside function - localVar: " + localVar);
}

scopeExample(); // Run the function

console.log("Outside function - globalVar: " + globalVar); // Works fine

// Using a try/catch block so the script doesn't crash when testing the error
try {
    console.log("Outside function - localVar: " + localVar);
} catch (error) {
    console.log("Outside function - localVar error: Cannot access localVar outside its function scope.");
}
