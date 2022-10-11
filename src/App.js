import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Programme from "./components/Programme/Programme";
import About from "./components/About/About";
import Number from "./components/Number/Number";
import Choisir from "./components/Choisir/Choisir";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Formateur from "./components/Formateur/Formateur";
import Etudiants from "./components/Etudiants/Etudiants";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Programme/>
      <About/>
      <Number/>
      <Choisir/>
      <Formateur/>
      <Etudiants/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
