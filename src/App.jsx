import Header from "./components/Header/Header";
import HousePhoto from "./components/HousePhoto/HousePhoto";
import FirstSection from "./components/FirstSection/FirstSection";
import SVGContent from "./components/SVGContent/SVGContent";
import PhotoSection from "./components/Photo/PhotoSection";
import SecoundSection from "./components/SecoundSection/SecoundSection";
import LastSection from "./components/LastSection/LastSection";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header Button={Button} />
      <HousePhoto />
      <FirstSection />
      <SVGContent />
      <PhotoSection />
      <SecoundSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
