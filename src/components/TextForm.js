import React, {useState} from 'react';



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("UpperCase Button was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("HandleOnChanged Working");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    
    return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.InfoText}</label> */}
    <textarea className="form-control" value ={text} placeholder='Enter Text Here' id="myBox" onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick} >CONVERT TO UPPER CASE</button>

</div>    
  )
}
