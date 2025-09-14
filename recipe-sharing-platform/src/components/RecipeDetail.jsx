// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                const recipeDetail = data.find((item) => item.id === parseInt(id));
                setRecipe(recipeDetail);
            })
            .catch((error) => console.error('Error loading recipe details:', error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside">
                    {recipe.instructions.map((step, index) => (
                        <li key={index} className="mb-2">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
    {/* Content here */}
</div>

    );
};

export default RecipeDetail;
