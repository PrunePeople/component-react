import SousComponent from "../Sous-component"
import Navbar from "../Header/Navigation/Navbar"
import './header.css'

const headerStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
  };

function Header () {
    return ( 
        <>
        <Navbar/>
    <h1 style={headerStyle}> Header composant </h1> 
    <SousComponent/>
    </>
    )
}

export default Header