import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './app.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112240',
    },
    secondary: {
      main: '#0A192F',
    },
    background: {
      default: '#E5E5E5',
    },
    text: {
      primary: '#A8B2D1',
      secondary: '#8892B0',
    },
    aquamarine: {
      main: '#64FFDA'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbar/>
        <div className="sections">
          <About/>
          <Projects/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
