import React from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import StrategyItem from "./StrategyItem";
import { IoMdArrowBack } from "react-icons/io";
import { withRouter } from "react-router";
import { ListGroup } from "react-bootstrap";

const SelectStrategy = ({ history }) => {
  const { strategies } = useTypedSelector(({ strategy }) => strategy);

  const goToBack = () => {
    history.push("/create-strategy");
  };

  return (
    <div className="container container-for-mobile">
      <button className="btn btn-back" onClick={goToBack}>
        <IoMdArrowBack />
        Back
      </button>
      <h1 className="heading">Select a strategy</h1>
      <ListGroup>
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
      </ListGroup>
    </div>
  );
};

export default withRouter(SelectStrategy);
