import FirstSection from "./components/FirstSection/FirstSection";
import SecoundSection from "./components/SecoundSection/SecoundSection";
import LastSection from "./components/LastSection/LastSection";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import AboutHouse from "./components/AboutHouse/AboutHouse";
import SVGContent from "./components/SVGContent/SVGContent";
import Footer from "./components/Footer/Footer";
import HeaderNavbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderNavbar />
      </div>
      <HeaderPhoto />
      <FirstSection />
      <AboutHouse />
      <SVGContent />
      <SecoundSection />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
