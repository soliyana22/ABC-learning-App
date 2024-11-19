
import React, { useState, useEffect } from "react";
// import Black from "../../assets/black.jpg";
// import White from "../../assets/white.jpg";
import "./Shirts.css";


function Shirts() {
  const [white, setWhite] = useState(false);
  const [black, setBlack] = useState(true);

  const whiteImage = require('./letterA.jpg');
  const blackImage = require('./letterB.jpg');

  function changeToWhite() {
    console.log(setWhite(whiteImage));
  }

  function changeToBlack() {
    console.log(setBlack(blackImage));
  }

  // useEffect(() => {
  //   setWhite(white);
  // }, white);

  return (
    <div>
      <div className="Shirts">
        <img alt="T-Shirt" className="White" src={white} />
        <img alt="T-Shirt" className="Black" src={black} />
      </div>
      <div className="ColorPicker">
        <button className="WhiteB" onClick={changeToWhite}>
          <p className="WhiteT">
            W<br />
            H<br />
            I<br />
            T<br />E
          </p>
        </button>
        <button className="BlackB" onClick={changeToBlack}>
          <p className="BlackT">
            B<br />
            L<br />
            A<br />
            C<br />K
          </p>
        </button>
      </div>
    </div>
  );
}

export default Shirts;