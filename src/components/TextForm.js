import React, {useState} from 'react';



export default function TextForm(props) {
     
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () =>{
        let conf = window.confirm("Are you Sure you want to erase text?");
        if(conf == true){
            setText("");
        }
        else{
        }
        
    }
    const [text, setText] = useState("");
    
    return (
        <>
<div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3"> 
    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.InfoText}</label> */}
    <textarea className="form-control" value ={text} placeholder='Enter Text Here' id="myBox" onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >Convert to UPPER CASE</button>
    <button className="btn btn-primary second" on onClick={handleLowClick} >Convert to lowercase</button>
    <button className="btn btn-primary second" on onClick={handleClearText} >Clear</button>
</div> 
<div className="container">
    <h1>Analysis of the Text</h1>
    <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
    <p>{Math.ceil(0.008 * (text.split(" ").length-1))} Minute read</p>
    </div> 
</>  
  )
}
