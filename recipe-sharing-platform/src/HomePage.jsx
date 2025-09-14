import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error('Error loading recipes:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{recipe.title}</h2>
                            <p className="text-gray-600">{recipe.summary}</p>
                            <Link to={`/recipe/${recipe.id}`} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                View Recipe
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
