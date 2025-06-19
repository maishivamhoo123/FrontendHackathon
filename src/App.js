import logo from './logo.svg';
import './App.css';
import BrandKitsCard from './comonents/Pages/pages';
import EmbodiedCarbon from './comonents/Graph/graph';
import Dashboard from './comonents/Stats/stats';
import LogoCarousel from './comonents/costumers_section/Costumers';
import ParallaxDoor from './comonents/ParalaxPage/Paralapage';
import ImageFocusPage from './comonents/ImageFocus/ImageFocus';

function App() {
  return (
    <div>
      <ParallaxDoor/>
      <ImageFocusPage/>
    <BrandKitsCard/>
    <EmbodiedCarbon/>
    <Dashboard/>
    <LogoCarousel/>
    </div>
  );
}

export default App;
