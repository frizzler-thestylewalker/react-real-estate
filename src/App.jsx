import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Comapnies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
