import React from "react"
import IngredientsList from "./components/IngredientsList"
import HuggingRecipe from "./components/HuggingRecipe"
import { getRecipeFromMistral } from "./ai"
import { getRecipeFromGoogle } from "./googleai"

export default function Main(){
    

    const [ingredients, setIngredients] = React.useState(
        []
    )

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGoogle(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function resetIngredients(){
        setIngredients([])
        setRecipe("")
    }


    return (
        <main>
            <div className="input-row">
                <form action={addIngredient} className="add-ingredient-form">
                    <input 
                        type="text" 
                        placeholder="e.g. chili powder"
                        aria-label="Add ingredient"
                        name="ingredient"
                    />
                    <button>Add Ingredient</button>
                </form>
                <button onClick={resetIngredients}>Reset Ingredient!</button>
            </div>

            { ingredients.length > 0 &&
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }
            {recipe && <HuggingRecipe recipe={recipe} />}
        </main>
    )
}