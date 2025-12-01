import { useState } from "react";
import { register } from"../services/api";
import { useNavigate, Link } from "react-router-dom";

function RegisterForm() {
    // déclarer les états pour stocker les valeur du form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [birthdate, setBirthDate] = useState('');
    // etat pour stocker les messages d'erreur
    const [message, setMessage] = useState('');
    // état pour savoir si on est en train d'envoyer une requeste
    const [loading, setLoading] = useState(false);
    // hook pour naviguer vers une autre page
    const navigate = useNavigate();

    // la function utilisé quand on soumet le formulaire
    async function handleSubmit(event) {
        // empêche le rechargement de la page quand on soumet le form
        event.preventDefault();
        // Je change le status du state loading
        setLoading(true);
        setMessage('');
        try {
            // en appelant notre service API
            const result = await register(email, password, city, birthdate);
            // console.log('inscription ok', result);
            setMessage('Insccription réussi')
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            console.error('erreur', error);
            setMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Inscription</h2>
            {/* formulaire avec la logique de submit */}
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
                <div>
                    <label htmlFor="city">Ville de naissance</label>
                    <input type="text" name="city" id="city" value={city} onChange={(e) =>
                         setCity(e.target.value)}
                         required disabled={loading}
                         placeholder="Entrez votre ville de naissance"/>
                </div>
                <div>
                    <label htmlFor="birthdate">Date de naissance</label>
                    <input type="date" name="birthdate" id="birthdate" value={birthdate} onChange={(e) =>
                         setBirthDate(e.target.value)}
                         required disabled={loading}
                         placeholder="Entrez votre date de naissance"/>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Chargement' : 'inscription'}
                </button>
            </form>
            {/* afficher les messages de success et d'erreur */}
            {message}
            <div>Déjà inscrit ?<Link to={'/login'}>Se connecter</Link></div>
        </div>
    )
    
}

export default RegisterForm;