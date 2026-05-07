import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import Name from './components/name';

function App() {

    const myStyle = {
        'backgroundColor':'rgb(13, 32, 156)',
        'color':'#FFF',
        'border':'5px solid #000',
        'margin':'10px',
        'padding':'10px'
    };

 
  return (
      <div>
          <Name name="Manibharathi" role="AI Developer"/>
          <Header title ="Home Page" headerStyle={myStyle}/>
          <Slider/>
          <Footer/>
          <Slider/>
          <Test/>
          <Name name="Reshmitha" role="Full Stack Developer"/>

          <Name/>
      </div>
  );
}

export default App;
