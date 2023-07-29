import React, {useState} from 'react';

const Review = () => {
    const [revText, setrevText] = useState("SampleText ")
    const handleInput = (e) => {
        setrevText(e.target.value);
    }
    
  return (
    <div className='container my-5'>
        Leave us a review!!
        <div className="space" style={{height: '10px'}}></div>
  <div class="mb-3">
    
    <textarea class="form-control" value={revText} id="Review1" onChange={handleInput} rows="3"></textarea>
  </div></div>
  )
}

export default Review