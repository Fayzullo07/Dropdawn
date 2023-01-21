import React from "react";

const Summary = (props) => {
  const { optionOne, optionTwo, optionThree } = props;
  return (
    <div className="col-12 col-lg-4 shadow border mx-2 p-4">
      <h1>Summary</h1>

      <div className="d-flex justify-content-between">
        <p>Option One</p>
        <b>{optionOne}</b>
      </div>
      <div className="d-flex justify-content-between">
        <p>Option Two</p>
        <b>{optionTwo}</b>
      </div>
      <div className="d-flex justify-content-between">
        <p>Option Two (Copy 1)</p>
        <b>{optionThree}</b>
      </div>
      <div className="d-flex justify-content-end border-top py-3">
        <b>{optionOne + optionTwo + optionThree} kg</b>
      </div>
    </div>
  );
};

export default Summary;
