import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Participation from './components/Participation';
function App() {
  useEffect(() => {
    document.title = "SrinjoyPramanikSignatureCut";
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <Participation />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;