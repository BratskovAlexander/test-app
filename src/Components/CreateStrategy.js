import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useAction } from "../hooks/strategyAction";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";

const CreateStrategy = ({ history }) => {
  const { selectedCurrentStrategy, strategies } = useTypedSelector(
    ({ strategy }) => strategy
  );
  const { createStrategy } = useAction();
  const [value, setValue] = useState(selectedCurrentStrategy || "");

  const goToBack = () => {
    history.push("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      addStrategy(value);
      setValue("");
      history.push("/");
    }
  };

  const addStrategy = (title) => {
    createStrategy(
      strategies.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <div className="container-for-mobile">
      <form
        onSubmit={submitHandler}
        className="form-block container-for-mobile"
      >
        <div className="mb-3">
          <button className="btn btn-back" onClick={goToBack}>
            <IoMdArrowBack />
            Back
          </button>
          <h1 className="heading">Create a strategy</h1>
          <NavLink className="btn btn-custom" to="/select-strategy">
            Select Strategy
          </NavLink>
          <label className="form-label">Add some text</label>
          <input
            type="text"
            maxLength="50"
            className="form-control"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div className="form-text">You can write something here</div>
          <button type="submit" className="btn btn-custom">
            Create strategy
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(CreateStrategy);
