import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Flex from "../Flex/Flex";

function Counter({ stock, initial = 1 }) {
  const [count, setCount] = useState(initial);

  function substract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <Flex>
        <Button onClick={substract} variant="contained">
          -
        </Button>
        <h3>{count}</h3>
        <Button onClick={add} variant="contained">
          +
        </Button>
        <Button variant="outlined">Buy now</Button>
      </Flex>
    </div>
  );
}

export default Counter;
