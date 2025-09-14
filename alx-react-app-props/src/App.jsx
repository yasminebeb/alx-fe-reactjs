import './App.css'
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      {/* <UserProfile /> */}
    </UserContext.Provider>
  )
}

export default App;