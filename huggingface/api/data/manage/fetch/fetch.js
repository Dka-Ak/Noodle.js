const fs = require("fs");
const axios = require("axios");

// Read the API key from key.txt
const apiKey = fs.readFileSync("key.txt", "utf8").trim();

// Hugging Face API endpoint (example: getting a specific model's info)
const url = "https://huggingface.co/api/models/{model_name}";

(async () => {
  try {
    // Make the request with the API key in the headers
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Log the response data
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data from Hugging Face:", error);
  }
})();
