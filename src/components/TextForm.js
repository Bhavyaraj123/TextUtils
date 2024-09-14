import React, { useState } from "react";

// export default function TextForm(props) {
//   const [Text, setText] = useState("Enter text here  with proper syntax");

//   const handle = () => {
//     console.log("clicked");
//     setText("You have cicked on button congrats");
//   };
//   const handleEvent = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <div class="mb-3">
//         <h2>{props.heading}</h2>
//         <textarea
//           className="form-control"
//           id="myBox"
//           value={Text}
//           rows="8"
//           onChange={handleEvent}
//         ></textarea>
//         <button className="btn btn-primary my-3 my" onClick={handle}>
//           Convert To upperCase
//         </button>
//       </div>
//     </div>
//   );
// }

export default function TextForm(props) {
  const [Text, setText] = useState("enter the correct details ");
  const handle = () => {
    setText(Text.toUpperCase());
    props.showAlert("Text converted to uppercase", "success");
    
  };
  const handleLo = () => {
    var a = Text.toLowerCase();
    setText("you are clicking on lowercase button " + a);
    props.showAlert("Text converted to lowercase ", "success")

  };

  const handleEvent = (event) => {
    setText(event.target.value);

  };
  const handleClear = () => {
    let b = " ";
    setText(b);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            value={Text}
            rows="8"
            onChange={handleEvent}
            style={{backgroundColor:props.mode==="dark"?"grey":"white"}}
          ></textarea>
          <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={handle}>
            Convert To UPPERCASE
          </button>
          <button  disabled={Text.length===0}className="btn btn-primary my-3 mx-2" onClick={handleLo}>
            Convert To lowercase
          </button>
          <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>
            Clear the box
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h1>YOur text summary </h1>
        <p>
          {" "}
          {Text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words ,{Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").filter((e)=>{return e.length!==0}).length} minutes take to read </p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"please enter some text to priview"}</p>
      </div>
    </>
  );
}
