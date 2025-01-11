import axios, { AxiosResponse } from "axios";

// Define your Gemini AI API endpoint
const GEMINI_API_URL = "https://api.gemini.com/v1/ai/query";

// Define the expected response structure from the Gemini AI API
interface GeminiAIResponse {
  // Replace with the actual structure of the response from Gemini AI
  data: any; // Use a more specific type if you know the response format
}

export const callGeminiAI = async (
  inputText: string
): Promise<GeminiAIResponse> => {
  try {
    // Set up the request body with input text and any other necessary params
    const response: AxiosResponse<GeminiAIResponse> = await axios.post(
      GEMINI_API_URL,
      {
        prompt: inputText,
        // Add any required headers or API keys here
      },
      {
        headers: {
          Authorization: "Bearer YOUR_API_KEY_HERE",
          "Content-Type": "application/json",
        },
      }
    );

    // Return the response from Gemini AI
    return response.data;
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    throw error; // Propagate the error to be handled by the calling component
  }
};
