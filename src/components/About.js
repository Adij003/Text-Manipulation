import React, {useState} from "react";

export default function About() {
  const [toggleStyle, setStyle]= useState({
    color: "black", 
    backgroundColor: "white",
    
    
  })
  const [overAllStyle, setOverAllStyle] = useState({
    color: "black", 
    backgroundColor: "white",
    
    padding: '10px',
    borderRadius: "15px"
  })
  const [btnText, setbtnText] = useState("Toggle Dark Mode")
  const switchStyle = ()=>{
    if( toggleStyle.color === 'white')
    {
      setStyle({
        color: "black",
        backgroundColor: "white",
      })
      setbtnText("Toggle Dark Mode")
      setOverAllStyle({
        color: "black",
        backgroundColor: "white",
        padding: '10px',
        borderRadius: "15px",
        
      })
    }
    else{
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: '0.5px solid white'
      })
      setbtnText("Toggle Light Mode")
      setOverAllStyle({
        color: "white",
        backgroundColor: "black",
        padding: '10px',
        borderRadius: "15px",

      })
    }
  }

  return (
    <div className="container" style={overAllStyle}>
    <div style={overAllStyle}>
      <h3 id="aboutSection">About: </h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={toggleStyle}>
          <h2 className="accordion-header" style={toggleStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={toggleStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={toggleStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={toggleStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={toggleStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={toggleStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3" onClick={switchStyle}>{btnText}</button>
    </div>
    </div>
  );
}
