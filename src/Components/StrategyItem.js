import React from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useAction } from "../hooks/strategyAction";
import { withRouter } from "react-router";
import { MdDelete } from "react-icons/md";
import { Button, ListItem } from "@mui/material";

const StrategyItem = ({ strategy, index, btnDelete, history, onSelected }) => {
  let className = "list-group-item";
  if (onSelected) {
    className += " selected";
  }
  const { strategies } = useTypedSelector(({ strategy }) => strategy);
  const { deleteStrategy, selectStrategy } = useAction();

  const getCurrentStrategy = (strategy) => () => {
    selectStrategy(strategy.title);
    history.push("/create-strategy");
  };

  const removeStrategy = (id) => () => {
    deleteStrategy(strategies.filter((strategy) => strategy.id !== id));
  };

  return (
    <ListItem sx={{ justifyContent: "space-between" }} className={className}>
      <span className="index">{index + 1}</span>
      <div onClick={onSelected && getCurrentStrategy(strategy)}>
        {strategy.title}
      </div>
      {btnDelete && (
        <Button
          type="button"
          className="btn btn-delete"
          onClick={removeStrategy(strategy.id)}
        >
          <MdDelete />
        </Button>
      )}
    </ListItem>
  );
};

export default withRouter(StrategyItem);
