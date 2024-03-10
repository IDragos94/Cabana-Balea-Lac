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

import "./App.css";

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
