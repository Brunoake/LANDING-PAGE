import './App.css';
import { NavBar } from './components/NavBar';
import Body from './components/Body';
import Sections from './components/Sections';

function App() {

  return (
    <div className='app'>
     <NavBar/>
     <Body/>
     <Sections/>
    </div>
  )
}

export default App
