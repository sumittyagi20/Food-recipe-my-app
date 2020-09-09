import React from "react";
import RecipeIteam from "./RecipeItem";

const Recipes = (props) =>{
    const {recipes} = props;
    return (
        <div className ="card-columns">
            {recipes.map(recipe => 
            <RecipeIteam 
            key = {Math.random() * 10 }    
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientLines={recipe.recipe.ingredientLines}/>)}
        </div>
    )
}

export default Recipes;