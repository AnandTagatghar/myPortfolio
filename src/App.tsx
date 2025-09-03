import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Protfolio | Anand Tagatghar';
    
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <div className="backgroundImageOne w-screen h-screen absolute "></div>
      <div className="w-screen h-screen ">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </div>
    </>
  );
}

export default App;
