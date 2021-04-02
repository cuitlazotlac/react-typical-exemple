import logo from "./logo.svg";
import "./App.css";
import Typical from "react-typical";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi it's Cuitlazotlac</h1>
        <p> I'm a{' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Product Manager 👨🏻‍💻",
              5000,
              "Web Designer 🦕",
              5000,
              "Data-driven Guy 📈",
              5000,
              "French 🇫🇷 Egyptian 🇪🇬 Mexican 🇲🇽 Guy",
              5000,
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
