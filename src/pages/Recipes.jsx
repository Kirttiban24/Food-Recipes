import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'

const Recipes = () => {

  const {data} = useContext(recipecontext)

  const renderRecipes = data.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  ))

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default Recipes
