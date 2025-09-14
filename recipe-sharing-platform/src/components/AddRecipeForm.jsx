import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Recipe title is required.';
        }

        if (!ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required.';
        } else {
            const ingredientsArray = ingredients.split('\n').filter((item) => item.trim());
            if (ingredientsArray.length < 2) {
                newErrors.ingredients = 'Please include at least two ingredients.';
            }
        }

        if (!steps.trim()) {
            newErrors.steps = 'Preparation steps are required.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({}); // Clear errors

        // Create the new recipe object
        const newRecipe = {
            title,
            ingredients: ingredients.split('\n').filter((item) => item.trim()),
            steps: steps.split('\n').filter((item) => item.trim()),
        };

        console.log('New Recipe:', newRecipe);

        // Clear the form fields
        setTitle('');
        setIngredients('');
        setSteps('');
        alert('Recipe added successfully!');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full border ${
                            errors.title ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter the recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="ingredients">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className={`w-full border ${
                            errors.ingredients ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter each ingredient on a new line"
                        rows="5"
                    ></textarea>
                    {errors.ingredients && (
                        <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="steps">
                        Preparation Steps (one per line)
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className={`w-full border ${
                            errors.steps ? 'border-red-500' : 'border-gray-300'
                        } rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter each step on a new line"
                        rows="5"
                    ></textarea>
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
