import React from "react";
import { Button } from "react-bootstrap";

function TransButton({ text, onClick }) {
  return (
    <Button variant="outline-success" size="lg" onClick={onClick}>
      {text}
    </Button>
  );
}

export default TransButton;