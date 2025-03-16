const fs = require("fs");
const axios = require("axios");
const path = require("path");

// Read the input from input.json
const inputFilePath = path.resolve(__dirname, "./input.json");
const inputData = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));
const modelName = inputData.model_name;

// Read the API key from key.txt
const apiKeyPath = path.resolve(__dirname, "./key.txt");
const apiKey = fs.readFileSync(apiKeyPath, "utf8").trim();

// Hugging Face API endpoint (use the model name dynamically)
const url = `https://huggingface.co/api/models/${modelName}`;

(async () => {
  try {
    // Make the API call
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Log the response
    console.log("Response from Hugging Face:");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data from Hugging Face:", error.message);
  }
})();

