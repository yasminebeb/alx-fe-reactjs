import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const addRecipe = useRecipeStore((state) => (state.addRecipe))

  const handleSubmit = (event) => {
    event.preventDefault()
    addRecipe({id: Date.now(), title, description})
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      >
      </textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddRecipeForm