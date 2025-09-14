import useRecipeStore from "./recipeStore"

const RecipeList = () => {

  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div>
        {recipes.map(recipe => {
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
          </div>
        })}
    </div>
  )
}

export default RecipeList