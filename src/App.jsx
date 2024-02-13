
import Header from './components/Header/Header'
import HousePhoto from './components/HousePhoto/HousePhoto';
import FirstSection from './components/FirstSection/FirstSection';
import CardContent from './components/CardContent/CardContent';
import SecoundSection from'./components/SecoundSection/SecoundSection';
import LastSection from './components/LastSection/LastSection';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header/>
      <HousePhoto/>
      <FirstSection />
      <CardContent/>
      <SecoundSection/>
      <LastSection/>
      <Footer/>
  
     </div>
      
   
  );
}

export default App;
