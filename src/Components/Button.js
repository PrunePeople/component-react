// Définit un composant fonctionnel nommé Button
export default function Button(props) {
    // Rendu du composant : affiche un bouton avec le texte provenant des props
    return <button>{props.text}</button>;
  }
  