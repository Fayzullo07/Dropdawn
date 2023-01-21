import React from "react";

const Dropdawn = (props) => {
  const {
    optionOne,
    setOptionOne,
    optionTwo,
    setOptionTwo,
    optionThree,
    setOptionThree,
    numbers,
  } = props;

  const printChoose = (data) => {
    if (data === 100) {
      return "One";
    } else if (data === 200) {
      return "Two";
    } else if (data === 300) {
      return "Three";
    } else {
      return "Choose...";
    }
  };
  return (
    <div className="col-12 col-lg-7 shadow border mx-2 p-3">
      <div className="col-12">
        <div className="mb-3">
          <label htmlFor="name" className="col-form-label">
            <b>Option One</b>
          </label>
          <div className="input-group">
            <select
              className="form-select"
              onChange={(e) => setOptionOne(e.target.value * 100)}
            >
              <option value="0">{printChoose(optionOne)}</option>
              {numbers.map((x, y) => (
                <option key={y + 1} value={y + 1}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="mb-3">
          <label htmlFor="email" className="col-form-label">
            <b>Option Two</b>
          </label>
          <div className="input-group">
            <select
              className="form-select"
              onChange={(e) => setOptionTwo(e.target.value * 100)}
            >
              <option value={0}>{printChoose(optionTwo)}</option>
              {numbers.map((x, y) => (
                <option key={y + 1} value={y + 1}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="mb-3">
          <label htmlFor="password" className="col-form-label">
            <b>Option Two (copy 1)</b>
          </label>
          <div className="input-group">
            <select
              className="form-select"
              onChange={(e) => setOptionThree(e.target.value * 100)}
            >
              <option value={0}>{printChoose(optionThree)}</option>
              {numbers.map((x, y) => (
                <option key={y + 1} value={y + 1}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdawn;
