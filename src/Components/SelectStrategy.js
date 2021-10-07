import React from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import StrategyItem from "./StrategyItem";
import { IoMdArrowBack } from "react-icons/io";
import { withRouter } from "react-router";
import { Button, List } from "@mui/material"

const SelectStrategy = ({ history }) => {
  const { strategies } = useTypedSelector(({ strategy }) => strategy);

  const goToBack = () => {
    history.push("/create-strategy");
  };

  return (
    <div className="container container-for-mobile">
      <Button className="btn btn-back" onClick={goToBack}>
        <IoMdArrowBack />
        Back
      </Button >
      <h1 className="heading">Select a strategy</h1>
      <List>
        {strategies.map((strategy, index) => {
          return (
            <StrategyItem
              strategy={strategy}
              key={strategy.id}
              index={index}
              onSelected
            />
          );
        })}
      </List>
    </div>
  );
};

export default withRouter(SelectStrategy);
