import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <About/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
