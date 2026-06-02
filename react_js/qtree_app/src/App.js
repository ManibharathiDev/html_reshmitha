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
import Menu from './components/menu';
import Login from './components/login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/about';

function App() {

    const myStyle = {
        'backgroundColor':'rgb(13, 32, 156)',
        'color':'#FFF',
        'border':'5px solid #000',
        'margin':'10px',
        'padding':'10px'
    };

 
  return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Products/>}/>
                <Route path='/about_qtree' element={<About/>}/>
            </Routes>
        </Router>
  );
}

export default App;
