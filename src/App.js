import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <> 
      <Navbar titlehead = "TextUtils Workspace" about = "About Our Work"/>
      {/* <Navbar /> */}
      <div className="container my-3">
      <TextForm InfoText = "Enter Text Below" heading = "Text For Analysis"/>
      </div> 
    </>
  );
}

export default App;
 