import React from "react";

const Buttons = (props) => {
  const { setOptionOne, setOptionTwo, numbers } = props;
  return (
    <>
      <div className="container my-2">
        <div className="d-grid gap-2 col-6 col-lg-2 mx-auto">
          <button className="btn btn-primary" onClick={() => setOptionOne(0)}>
            Option One
          </button>
          {numbers.map((x, y) => (
            <button
              className="btn btn-secondary"
              onClick={() => setOptionOne((y + 1) * 100)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="container my-4">
        <div className="d-grid gap-2 col-6 col-lg-2 mx-auto">
          <button className="btn btn-primary" onClick={() => setOptionTwo(0)}>
            Option Two
          </button>
          {numbers.map((x, y) => (
            <button
              className="btn btn-secondary"
              onClick={() => setOptionTwo((y + 1) * 100)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Buttons;
