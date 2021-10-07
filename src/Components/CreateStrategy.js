import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useAction } from "../hooks/strategyAction";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Button, TextField } from "@mui/material";

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
    <div className="form-block container-for-mobile">
      <div>
        <Button className="btn btn-back" onClick={goToBack}>
          <IoMdArrowBack />
          Back
        </Button>
      </div>
      <h1 className="heading">Create a strategy</h1>
      <NavLink to="/select-strategy">
        <Button className="btn btn-custom" variant="contained">
          Select Strategy
        </Button>
      </NavLink>
      <TextField
        id="outlined-textarea"
        label="Add some text"
        placeholder="Add some text"
        multiline
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        className="btn btn-custom"
        variant="contained"
        type="button"
        onClick={submitHandler}
      >
        Create strategy
      </Button>
    </div>
  );
};

export default withRouter(CreateStrategy);
