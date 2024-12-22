import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <div style={{ margin: "60px 0" }}></div> {/* Spacer */}

      <Skills />
      <Contact />

    </div>
  );
}

export default App;
