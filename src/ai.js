import { HfInference } from "@huggingface/inference"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try to not include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const hf = new HfInference("")


export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make! Don't bother saying "Sure, I'd be happy to help!". Just get straight to the point.` },
            ],
            max_tokens: 1024,
        })
        console.log(typeof (response.choices[0].message.content))
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
        return ("Uh oh. Chef Improv ran out of recipes. Come back later!")
    }
}