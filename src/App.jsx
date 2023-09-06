import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import All from './components/All';
import { Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Single from './components/Single';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {

  return (
    <div className="App">
      <Header />

        <Routes>
          <Route exact path="/" Component={Home} />
         <Route exact path='/Products' Component={All} />
           <Route exact path='/delivery' Component={About} />
           <Route exact path='/feedback' Component={AboutUs} />
         <Route exact path='/products/:id' Component={Single} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
