// Importe le fichier CSS pour styliser l'application
import "./App.css";

// Importe le composant Header depuis le chemin relatif './Components/Header/Header'
import Header from './Components/Header/Header';

// Importe le composant Button depuis le chemin relatif './Components/Button'
import Button from "./Components/Button";

// Déclare le composant principal de l'application
function App() {
  // Déclare une variable "title" avec la valeur "Hello from app"
  const title = "Hello from app";

  // Rendu du composant App
  return (
    <>
      {/* Affiche le composant Header */}
      <Header></Header>
      
      {/* Division contenant une image (à remplir src) */}
      <div>
        <img className="App" src="" alt="" />
      </div>
      
      {/* Affiche un titre avec la valeur de la variable "title" */}
      <h1 className="App">{title}</h1>
      
      {/* Affiche un autre titre avec la valeur de la variable "title" en majuscules */}
      <h1 className="App">{title.toUpperCase()}</h1>
      
      {/* Affiche un paragraphe */}
      <p>jfjfjfj</p>
      
      {/* Affiche le composant Button avec le texte "Click du Parent" */}
      <Button text="Click du Parent"></Button>
    </>
  );
}

// Exporte le composant App pour qu'il puisse être utilisé ailleurs
export default App;
