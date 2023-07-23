import React, {useState} from 'react';



export default function TextForm(props) {
     
    const handleUpClick = ()=>{
        setBackupText(text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        setBackupText(text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () =>{
        setBackupText(text);
        let conf = window.confirm("Are you Sure you want to erase text?");
        if(Boolean(conf)){
            setText("");
        }
        else{
        }
        
    }
    const handleCopy = ()=>{
        let copyText = document.getElementById("myTextArea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }
    const handleRevertText = ()=>
    {
        setText(backupText);
    }
    const handleExtraSpace = ()=>{
        setBackupText(text);
        let newText = text.split(/[ ]+/);// note that space is necessary in the rectangular bracket
        setText(newText.join(" "));
    }
    const [text, setText] = useState("");
    const [backupText, setBackupText] = useState("");
    
    return (
        <>
<div className='container'>
    <h1 style = {{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3"> 
    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.InfoText}</label> */}
    <textarea className="form-control" value ={text} placeholder='Enter Text Here' id="myTextArea" style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'} } onChange={handleOnChange} rows="13"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >Convert to UPPER CASE</button>
    <button className="btn btn-primary second" onClick={handleLowClick} >Convert to lowercase</button>
    <button className="btn btn-primary second" onClick={handleClearText} >Clear</button>
    <button className="btn btn-primary second" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary second" onClick={handleRevertText} >Revert To Original</button>
    <button className="btn btn-primary second" onClick={handleExtraSpace} >Remove Extra Spaces</button>
</div> 
<div className="container my-5" style = {{color: props.mode==='dark'?'white':'black'}}>
    <h1>Analysis of the Text</h1>
    <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
    <p>{Math.ceil(0.008 * (text.split(" ").length-1))} Minute read</p>
    </div> 
</>  
  )
}
