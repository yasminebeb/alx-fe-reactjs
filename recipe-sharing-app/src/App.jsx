import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>

        {/* Integrate SearchBar at the top for global accessibility */}
        <SearchBar />

        {/* Define Routes */}
        <Routes>
          {/* Home route with AddRecipeForm and RecipeList */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          
          {/* RecipeDetails route */}
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper component for RecipeDetails to extract recipeId from URL params
import { useParams } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;

