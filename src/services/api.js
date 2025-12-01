import { useNavigate } from "react-router-dom";

// récupère l'url de l'api défini dans le fichier .env
const API_URL = import.meta.env.VITE_API_URL;

// logique d'inscription
export async function register(email, password, city, birthdate) {
    // faire la request POST sur l'url /api/auth/register
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // passer les data au body
        body: JSON.stringify({ email, password, city, birthdate}),

    });
    // parse la response JSON
    const data = await response.json();

    // gestion d'erreur
    if (!response.ok) {
        throw new Error(data.Error || 'inscription à échoué');
    }

    // return la response
    return data;

}

// logique de connexion
export async function login(email, password) {
    // faire la request POST sur la route /api/auth/login
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    });

    // traitement et parse de la response JSON
    const data = await response.json();

    // traitement en cas d'erreur
    if (!response.ok) {
        throw new Error(data.Error || 'échec lors de la connexion');
    }

    // return la response
    return data;
}

export async function getProfile(token) {
    // on prépare la requête GET sur la route /api/auth/profil
    // pour les routes qui nécessite une connexion, on doit passer dans le header le Token
    const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'GET',
        headers: {
             'Content-Type' : 'application/json',
             // passer le token dans le format qui est attendu dans l'api
             'Authorization' : `Bearer ${token}`
        },

    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.Error || 'erreur lors de la récupération du profil')
    }


    return data;
}

