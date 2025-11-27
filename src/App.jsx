import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <>
    {/* Active le systeme de router */}
      <BrowserRouter>
        {/* définir le conteneur des routes */}
        <Routes>
          {/* route pour la page d'inscription */}
          <Route path="/register" element={<RegisterForm />} />
          {/* si aucune route n'est trouvée, rediriger vers la page d'inscription */}
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
