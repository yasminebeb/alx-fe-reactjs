import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  searchTerm: '', // Search input
  filteredRecipes: [], // Recipes matching the search term
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));
export default useRecipeStore;
