import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";

function LoginForm () {
    // déclarer les états pour stocker les valeur du form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // état pour stocker le token
    const [token, setToken] = useState('');
    // état pour stocker les messages d'erreur de connexion
    const [message, setMessage] = useState('');
    // état pour savoir si on est en train d'envoyer une requeste
    const [loading, setLoading] = useState(false);
    // hook pour naviguer vers une autre page
    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setMessage('');
        
        try {
            const result = await login(email, password);
            // je stock mon token dans le local storage
            localStorage.setItem('token', result.token)
            // modifier le message de validation
            setMessage('connexion réussie');

            setTimeout(() => {
                navigate('/profile')
            }, 3000);
        }
        catch (error) {
            console.error('erreur', error);
            setMessage(error);
        }
        finally {
            setLoading(false);
        }
    }
    return(

        <div>
            <h2>Page de Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) =>
                         setEmail(e.target.value)}
                         required disabled={loading}
                         placeholder="Entrez votre email"/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) =>
                         setPassword(e.target.value)}
                         required disabled={loading}
                         placeholder="Entrez votre mot de passe"/>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Chargement' : 'Connexion'}
                </button>   
            </form>
            {/* afficher les messages de success et d'erreur */}
            {message}
            <p>Pas encore inscrit ?<Link to={'/register'}>S'inscrire</Link></p>
        </div>
    );
}

export default LoginForm;