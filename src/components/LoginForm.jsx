import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";

function LoginForm() {
    return (
        <div>
            <h2>Connexion</h2>
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
        </div>
    )
}

export default LoginForm;