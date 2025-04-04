import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "" });
// apiKey: "thekey"
export async function getRecipeFromGoogle(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` ,
      });
      return response.text;
    } catch(err){
      console.error(err.message)
      return ("Uh oh. Chef Improv ran out of recipes. Come back later!")
    }
}
