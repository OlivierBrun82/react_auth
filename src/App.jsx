import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
    {/* Active le systeme de router */}
      <BrowserRouter>
        {/* définir le conteneur des routes */}
        <Routes>

          {/* route pour la page d'inscription */}
          <Route path="/register" element={<RegisterForm />} />
          {/* route pour la page de connexion */}
          <Route path="/login" element={<LoginForm />} />
          {/* route pour la page de profile */}
          <Route path="/profile" element={<UserProfile />} />
          {/* si aucune route n'est trouvée, rediriger vers la page d'inscription */}
          <Route path="*" element={<Navigate to="/login" />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
