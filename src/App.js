import "./App.css";
import Header from './Components/Header/Header'
import Button from "./Components/Button"


function App() {
  const title = "Hello from app"
  return (
    <>
    <Header></Header>
      <div>
        <img className="App" src="" alt="" />
      </div>
      <h1 className="App">{title}</h1>
      <h1 className="App">{title.toUpperCase()}</h1>
      <p>jfjfjfj</p>
      <Button text="Click du Parent"></Button>
    </>
  );
}

export default App;
