import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
