import './App.css';
import { NavBar } from './components/NavBar';
import Body from './components/Body';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app'>
     <NavBar/>
     <Body/>
     <Sections/>
     <Footer/>
    </div>
  )
}

export default App
