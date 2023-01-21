import React, { useState } from "react";
import Buttons from "./Buttons";
import Dropdawn from "./Dropdawn";
import Summary from "./Summary";

function App() {
  const [optionOne, setOptionOne] = useState(0);
  const [optionTwo, setOptionTwo] = useState(0);
  const [optionThree, setOptionThree] = useState(0);
  const numbers = ["One", "Two", "Three"];

  return (
    <div>
      <div className="container mt-5 p-5">
        <div className="row p-4">
          <Dropdawn
            optionOne={optionOne}
            setOptionOne={setOptionOne}
            optionTwo={optionTwo}
            setOptionTwo={setOptionTwo}
            optionThree={optionThree}
            setOptionThree={setOptionThree}
            numbers={numbers}
          />

          <Summary
            optionOne={optionOne}
            optionTwo={optionTwo}
            optionThree={optionThree}
          />
        </div>
      </div>

      <Buttons
        setOptionOne={setOptionOne}
        setOptionTwo={setOptionTwo}
        numbers={numbers}
      />
    </div>
  );
}

export default App;
