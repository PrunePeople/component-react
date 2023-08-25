// Importe le composant SousComponent depuis le chemin relatif '../Sous-component'
import SousComponent from "../Sous-component";

// Importe le composant Navbar depuis le chemin relatif '../Header/Navigation/Navbar'
import Navbar from "../Header/Navigation/Navbar";

// Importe le fichier CSS pour les styles spécifiques du composant
import './header.css';

// Définit un objet style en ligne pour le composant Header
const headerStyle = {
  backgroundColor: "#f2f2f2",
  padding: "10px",
};

// Déclare le composant Header
function Header() {
  return ( 
    <>
      {/* Affiche le composant Navbar */}
      <Navbar/>

      {/* Affiche un titre avec le style défini dans l'objet headerStyle */}
      <h1 style={headerStyle}> Header composant </h1> 

      {/* Affiche le composant SousComponent */}
      <SousComponent/>
    </>
  );
}

// Exporte le composant Header pour qu'il puisse être utilisé ailleurs
export default Header;
