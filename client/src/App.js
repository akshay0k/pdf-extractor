import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
