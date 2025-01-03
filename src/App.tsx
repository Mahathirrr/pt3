import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fontsource/dm-sans';

function App() {
  useEffect(() => {
    document.title = "Muhammad Mahathir - Backend Developer & Tech Enthusiast";
  }, []);

  return (
    <div className="font-['DM_Sans'] antialiased">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;