const fs = require("fs");
const path = require("path");


const userInput = prompt("Enter query for AI: ")

// Save user input to a JSON file
const inputFilePath = path.resolve(__dirname, "../huggingface/api/data/manage/fetch/input.json");
fs.writeFileSync(inputFilePath, JSON.stringify({ model_name: userInput }, null, 2), "utf8");

console.log("Input data saved successfully. Proceeding to fetch the data...");

// Trigger the fetch process
require("../huggingface/api/data/manage/fetch/fetch.js");
