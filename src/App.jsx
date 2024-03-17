<<<<<<< HEAD
import FirstSectio from "./components/FirstSection/FirstSection";
import SecoundSection from "./components/SecoundSection/SecoundSection";
import LastSection from "./components/LastSection/LastSection";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import AboutHouse from "./components/AboutHouse/AboutHouse";
import SVGContent from "./components/SVGContent/SVGContent";
import Footer from "./components/Footer/Footer";
import HeaderNavbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
=======
import {
  Header,
  HousePhoto,
  FirstSection,
  SVGContent,
  PhotoSection,
  SecoundSection,
  LastSection,
  Footer,
} from "./components";
import { Button } from "react-bootstrap";

>>>>>>> 59f9d5ecd97d9237b51f933e53e3c72abacaf288
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <HeaderPhoto />
      <FirstSectio />
      <AboutHouse />
      <SVGContent />
      <SecoundSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
