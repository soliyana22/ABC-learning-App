
// import "./style.css";
import React, { useState } from 'react';
// import white from '/public/images/A.jpg'
// import black from '/public/images/letterC.jpg'
// import grey from '/public/images/letterD.jpg'


const App = () =>{
    const [selected, setSelected] = useState("grey")

   return(
       <>
           {/* <img src={/images/${selected}} alt='shirt' />  */}
           <img  src={window.location.origin + '../public/A.jpg'} width='100px' height='100px' alt='shirt' />
            {/* {/* <button onClick={() => setSelected(white)}> White</button> */}
           {/* <button onClick={() => setSelected(black)}> Black</button>  */}

            <button onClick={() => setSelected()}> Click</button> 
       </>
   )
}
export default App;