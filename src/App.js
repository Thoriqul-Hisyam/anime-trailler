import {useEffect} from "react";
import axios from 'axios';
import './App.css';
import Navbar from './Component/NavbarComponent'
import Discover from "./Component/DiscoverPage";
function App() {
  
  return (
    
    <div className="App">
        <Navbar/>
        <Discover/>
    </div>
  );
}

export default App;
