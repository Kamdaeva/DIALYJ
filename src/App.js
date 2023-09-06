
import './App.css';
import Actualite from './components/Actualite';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navba from './components/Navba';
import Partenaire from './components/Partenaire';
import Propo from './components/Propo';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Valeur from './components/Valeur';

function App() {
 
  return (
    <div className="App">
      <Home/>
      <Navba/>
      <Header/>
      <Valeur/>
      <Propo/>
      <Service/>
      <Counter/>
      <Actualite/>
      <Testimonial/>
      <Partenaire/>
      <Footer/>
      

    </div>
  );
}

export default App;
