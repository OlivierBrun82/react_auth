import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/api";

function UserProfile() {
    // hook de de navigation
    const navigate = useNavigate();
    // state de stockage
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

        // fonction pour que l'user puisse se déconnecter 

    function disconnectUser() {

        localStorage.removeItem('token');
        navigate('/login');

        return;        
    }

    // chargé au chargement de la page
    useEffect(()=> {
       async function handleProfile() {
            // récupère le token dans le localstorage
            const token = localStorage.getItem('token');
            if(!token) {
                navigate('/login');
                return;
            }
            try {
                // on appel l'API, function getProfile
                const data = await getProfile(token);

                setUser(data.user);
                console.log(user);
                               
                
            } catch (error) {
                console.log('erreur', error);
                setError(error.message);
                
                // gestion dans le cas le token est invalide ou introuvable
                if(error.message.includes('401') || error.message.includes('Token')) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }

            }finally{

                setLoading(false);
            }
        }

        // appel de ma fonction
        handleProfile();
    }, [navigate])

    if(loading) {
        return(

            <div>
                <p>en chargement</p>
            </div>
        )

    }

    return(
        <div>
            <h2>Page de profile</h2>
            {user &&(
                <div>
                    <p>id: {user.id}</p>
                    <p>email: {user.email}</p>
                    <p>ville de naissance {user.city}</p>
                    <p>date de naissance {new Date(user.birthdate).toLocaleDateString()}</p>
                    <p>inscrit le : {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
            )}
            <button onClick={disconnectUser}>Déco</button>
        </div>
    )

}    
    
export default UserProfile;