import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';

function App() {
  return (
      <div>
          <Header/>
          <Slider/>
          <Footer/>
          <Slider/>
          <Test/>
      </div>
  );
}

export default App;
