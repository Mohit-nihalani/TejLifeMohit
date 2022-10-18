import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Footer from './components/footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import RecentWorks from './components/RecentWorks';


function App() {
  return (
    <>
      <Navigation/>
      <HeroSection/>
      <Section2/>
      <Section3/>
      <RecentWorks/>
      <Footer/>
    </>
  );
}

export default App;
