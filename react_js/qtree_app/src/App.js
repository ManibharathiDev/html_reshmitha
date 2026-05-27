import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import Name from './components/name';
import SampleState from './components/sample_state';
import FormType from './components/form_type';
import Loading from './components/loading';
import DataLoader from './components/data_loader';
import Products from './components/products';

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

            <Products/>

            {/* <DataLoader/> */}

            {/* <Loading/>

            <FormType/>

            <SampleState/>

            <SampleState/>

            <SampleState/> */}

          {/* <Name name="Manibharathi" role="AI Developer"/>
          <Header title ="Home Page" headerStyle={myStyle}/>
          <Slider/>
          <Footer/>
          <Slider/>
          <Test/>
          <Name name="Reshmitha" role="Full Stack Developer"/>

          <Name/> */}
      </div>
  );
}

export default App;
