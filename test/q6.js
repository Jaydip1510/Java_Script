const userInput = prompt("Enter a string:");
const firstLetter = userInput.charAt(0).toUpperCase();
const convertedString = firstLetter + userInput.slice(1);

document.write("Converted string:", convertedString);