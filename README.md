# React Auth (Front)

Petite application front en **React + Vite** qui sert de base pour tester un système d’authentification avec une API Node.js (inscription / connexion / profil).

## Fonctionnalités

- **Routing React Router**
  - Route principale `/register` pour la page d’inscription.
  - Toute autre route redirige vers `/register`.

- **Inscription utilisateur**
  - Composant `RegisterForm` avec un formulaire d’inscription.
  - Prévu pour appeler le service `register(email, password)` défini dans `src/services/api.js`.

- **Services API (`src/services/api.js`)**
  - **`register(email, password)`** : POST sur `POST /api/auth/register`.
  - **`login(email, password)`** : POST sur `POST /api/auth/login`.
  - **`getProfil(token)`** : GET sur `GET /api/auth/profil` avec un header `Authorization: Bearer <token>`.
  - Toutes les URLs sont construites à partir de la variable d’environnement `VITE_API_URL`.

## Prérequis

- Node.js (version récente LTS recommandée)
- npm (ou pnpm/yarn si vous adaptez les commandes)
- Une API back fonctionnelle qui expose les routes :
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/auth/profil`

## Installation

1. Cloner le dépôt ou copier ce projet dans votre environnement.
2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Créer un fichier `.env` à la racine avec l’URL de votre API :

   ```bash
   VITE_API_URL=http://localhost:5000
   ```

   Adaptez l’URL en fonction de la configuration de votre back.

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

- `src/main.jsx` : point d’entrée React.
- `src/App.jsx` : configuration du router (`BrowserRouter`, `Routes`, `Route`).
- `src/components/RegisterForm.jsx` : composant pour le formulaire d’inscription.
- `src/services/api.js` : fonctions utilitaires pour appeler l’API d’authentification.
- `src/App.css` / `src/index.css` : styles globaux.

## Améliorations possibles

- Compléter la logique du formulaire d’inscription (`RegisterForm`) :
  - Liaison des inputs à `email` et `password`.
  - Appel réel à `register(email, password)` dans `handleSubmit`.
  - Affichage des messages de succès / erreur.
- Ajouter un écran de **connexion** en utilisant la fonction `login`.
- Mettre en place une page **profil** qui appelle `getProfil` avec un token stocké (localStorage, context, etc.).

Ce projet sert de base pédagogique pour comprendre l’intégration front React avec une API d’authentification Node.js.
