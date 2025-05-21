import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const GEMINI_TOKEN = import.meta.env.VITE_GEMINI_TOKEN || "";

const ai = new GoogleGenAI({ apiKey: GEMINI_TOKEN });

export async function getRecipeFromGemini(ingredientsArr) {
const ingredientsString = ingredientsArr.join(", ");
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: ingredientsString,
    config: {
        systemInstruction: SYSTEM_PROMPT,
    },
  });
  console.log(response.text);
  return response.text
}
