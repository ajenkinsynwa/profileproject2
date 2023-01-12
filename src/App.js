
// import logo from './logo.svg';
import './App.css';
import { NavBar } from './commponets/NavBar';
import { Banner } from './commponets/Banner';
import { Skills } from './commponets/Skills';
import { Projects } from './commponets/Projects';
import { Contact } from './commponets/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
