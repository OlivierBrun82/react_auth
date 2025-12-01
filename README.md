# React Auth (Front)

Application front-end en **React + Vite** avec un système d'authentification complet (inscription / connexion / profil) connecté à une API Node.js.

## Fonctionnalités

### 🔐 Authentification complète

- **Inscription utilisateur** (`/register`)
  - Formulaire avec email, mot de passe, ville de naissance et date de naissance
  - Validation des champs
  - Gestion des messages de succès/erreur
  - Redirection automatique vers la page de connexion après inscription

- **Connexion utilisateur** (`/login`)
  - Formulaire de connexion avec email et mot de passe
  - Stockage du token JWT dans le localStorage
  - Gestion des erreurs de connexion
  - Redirection automatique vers le profil après connexion réussie

- **Profil utilisateur** (`/profile`)
  - Affichage des informations utilisateur (id, email, ville, date de naissance, date d'inscription)
  - Protection de la route : redirection vers `/login` si aucun token n'est présent
  - Vérification automatique de la validité du token
  - Bouton de déconnexion qui supprime le token et redirige vers la page de connexion

### 🛣️ Routing React Router

- `/register` : Page d'inscription
- `/login` : Page de connexion (route par défaut)
- `/profile` : Page de profil utilisateur (protégée)
- Toute autre route redirige vers `/login`

### 🔌 Services API (`src/services/api.js`)

- **`register(email, password, city, birthdate)`** : POST sur `/api/auth/register`
- **`login(email, password)`** : POST sur `/api/auth/login` (retourne un token)
- **`getProfile(token)`** : GET sur `/api/auth/profile` avec header `Authorization: Bearer <token>`
- Toutes les URLs sont construites à partir de la variable d'environnement `VITE_API_URL`

### 💾 Gestion du token

- Stockage du token JWT dans le `localStorage` après connexion
- Vérification automatique du token au chargement de la page profil
- Suppression automatique du token en cas d'erreur 401 (token invalide)
- Déconnexion manuelle via le bouton "Déco"

## Prérequis

- Node.js (version récente LTS recommandée)
- npm (ou pnpm/yarn si vous adaptez les commandes)
- Une API back fonctionnelle qui expose les routes :
  - `POST /api/auth/register` (attend : `email`, `password`, `city`, `birthdate`)
  - `POST /api/auth/login` (attend : `email`, `password` - retourne : `{ token }`)
  - `GET /api/auth/profile` (nécessite header `Authorization: Bearer <token>` - retourne : `{ user }`)

## Installation

1. Cloner le dépôt ou copier ce projet dans votre environnement.

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Créer un fichier `.env` à la racine avec l'URL de votre API :

   ```bash
   VITE_API_URL=http://localhost:5000
   ```

   Adaptez l'URL en fonction de la configuration de votre back.

4. Démarrer le serveur de développement :

   ```bash
   npm run dev
   ```

## Scripts disponibles

- **Démarrer le serveur de dev :**

  ```bash
  npm run dev
  ```

- **Build de production :**

  ```bash
  npm run build
  ```

- **Prévisualiser le build :**

  ```bash
  npm run preview
  ```

- **Linter le code :**

  ```bash
  npm run lint
  ```

## Structure du projet

```
src/
├── main.jsx                    # Point d'entrée React
├── App.jsx                     # Configuration du router (BrowserRouter, Routes, Route)
├── App.css                     # Styles de l'application
├── index.css                   # Styles globaux
├── components/
│   ├── RegisterForm.jsx       # Composant formulaire d'inscription
│   ├── LoginForm.jsx          # Composant formulaire de connexion
│   └── UserProfile.jsx        # Composant page de profil utilisateur
└── services/
    └── api.js                 # Fonctions utilitaires pour appeler l'API d'authentification
```

## Utilisation

1. **Inscription** : Accédez à `/register`, remplissez le formulaire et validez. Vous serez redirigé vers `/login`.

2. **Connexion** : Sur la page `/login`, entrez vos identifiants. Le token sera stocké automatiquement et vous serez redirigé vers `/profile`.

3. **Profil** : La page `/profile` affiche vos informations personnelles. Vous pouvez vous déconnecter via le bouton "Déco".

## Technologies utilisées

- **React 19.2.0** : Bibliothèque UI
- **React Router DOM 7.9.6** : Gestion du routing
- **Vite 7.2.4** : Build tool et serveur de développement
- **ESLint** : Linter pour la qualité du code

## Notes importantes

- Le token est stocké dans le `localStorage` sous la clé `'token'`
- La page profil vérifie automatiquement la présence et la validité du token
- En cas de token invalide ou expiré (erreur 401), l'utilisateur est automatiquement déconnecté et redirigé vers `/login`
- Les messages d'erreur et de succès sont affichés directement dans les composants

Ce projet sert de base pédagogique pour comprendre l'intégration front React avec une API d'authentification Node.js.
