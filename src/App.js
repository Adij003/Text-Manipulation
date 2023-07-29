import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Review from './components/Review';


function App() {
  const[mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);
  
  // creating a showAlert function

  const showAlert = (message, type) => {
    setAlert({ // first alert was null and now alert is an object
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  
  const toggleMode = () =>{
    if( mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }
  return (
    <> 
     <Router>
        <Navbar titlehead="TextUtils Workspace" mode={mode} toggleMode={toggleMode} about="About Our Work" />
        <Alert alert={alert} />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm InfoText="Enter Text Below" showAlert={showAlert} mode={mode} heading="Text For Analysis" />} />
          <Route path="/Review" element={<Review />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 
