import "./App.css";
import Navbar from "./components/Navebar";
// import Card from 'react-bootstrap/Card'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'

let firstName = "Yemss Food"
function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div>
      <Navbar /> 
    <br></br>
      <h1 className="heading">Hellow {firstName}</h1>

      <div className="img">
      <img src="download.jpeg "alt="" /> 
      <img src="download (3).jpeg "alt="" />
      <img src="download (2).jpeg "alt="" />
      <img src="download (1).jpeg "alt="" />
</div>
      {/* <input type ="text" htmlFor ="text" />
      <input type ="text" htmlFor ="text" />
      <input type ="text" htmlFor ="text" />
      <input type ="text" htmlFor ="text" />
      <input type ="text" htmlFor ="text" /> */}
      {/* <input type ="text" htmlFor ="text" /> */}
    
      <p className="pera"> 
         i m Jennifer Locklin, author and owner of Jennifer Cooks. 
        I am a trained chef and passionate about good food, cooking for family and friends,i
         and creating recipes that form lasting memories from one generation to the next.Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia fugit expedita architecto voluptas, eum placeat similique velit assumenda,</p>
 <div> 

  {/* className=`<card-sec`> */}
</div> 


    </div>

  );
}

export default App;
