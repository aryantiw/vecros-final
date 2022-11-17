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
<hr />
<p className='text-center'>

<img src={require('./components/pic3.png')} class="img-fluid" alt="athera drone"/>

  <h1>Vecros Cloud Sevice</h1>
  <p>Connected operations from anywhere in the world</p>
  </p>
<hr />
<Footer/>
    
    </>



  );
}

export default App;