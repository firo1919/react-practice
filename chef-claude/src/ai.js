import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN || "";
const client = new InferenceClient(HF_ACCESS_TOKEN);


export async function getRecipeFromMistral(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(", ");
	try {
		const chatCompletion = await client.chatCompletion({
            provider: "nebius",
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        });
        console.log(chatCompletion)
		return chatCompletion.choices[0].message.content;
	} catch (err) {
		console.error("HF error:", err);
		throw err;
	}
}
