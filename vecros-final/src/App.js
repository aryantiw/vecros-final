import Nav from './components/navbar';
import Jet from './components/jetpix';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Nav/>

    <img src={require('./components/pic1.png')} class="img-fluid" alt="athera drone"/>
      <br />
      <br />
    <Jet/>



<Footer/>
    
    </>



  );
}

export default App;