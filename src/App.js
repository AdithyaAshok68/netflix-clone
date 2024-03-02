import React from "react";
import './App.css'
import {action,originals,horror, comedy,  romance, documentry} from './urls'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
     <Rowpost url={originals} title='Netflix Originals' />
     <Rowpost url={action} title='Action' isSmall/>
     <Rowpost url={horror} title='Horror' isSmall/>
     <Rowpost url={comedy} title='Comedy' isSmall/>
     <Rowpost url={romance} title='Romance' isSmall/>
     <Rowpost url={documentry} title='Documentries' isSmall/>



    </div>
  );
}

export default App;
