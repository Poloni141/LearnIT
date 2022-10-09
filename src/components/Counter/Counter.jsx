import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Counter(stock, initial) {
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
    <>
      <Button onClick={substract} variant="contained">
        -
      </Button>

      <Button onClick={add} variant="contained">
        +
      </Button>
      <Button variant="outlined">Buy now</Button>
    </>
  );
}

export default Counter;
