// Importe la bibliothèque React
import React from 'react';

// Importe la bibliothèque ReactDOM pour interagir avec le DOM
import ReactDOM from 'react-dom/client';

// Importe le fichier CSS global pour les styles de l'application
import './index.css';

// Importe le composant racine App de votre application
import App from './App';

// Importe la fonction pour rapporter les métriques de performance Web
import reportWebVitals from './reportWebVitals';

// Crée un "root" React pour le rendu de l'application dans l'élément ayant l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rend l'application dans le "root" en utilisant le mode StrictMode de React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, vous pouvez utiliser reportWebVitals
// pour envoyer les résultats à un point d'analyse ou les afficher dans la console.
reportWebVitals();
