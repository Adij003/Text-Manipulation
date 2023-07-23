import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';

function App() {
  const[mode, setMode] = useState('light'); 
  
  const toggleMode = () =>{
    if( mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <> 
      <Navbar titlehead = "TextUtils Workspace" mode = {mode} toggleMode = {toggleMode} about = "About Our Work" />
      {/* <Navbar /> */}
      <div className="container my-3">
      <TextForm InfoText = "Enter Text Below" mode = {mode} heading = "Text For Analysis"/>
      </div> 
      <div className="container my-5">
        
        <About/>
      </div>
    </>
  );
}

export default App;
 