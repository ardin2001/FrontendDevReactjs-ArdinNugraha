import { useState } from "react";
export default function UseInput() {
  const [input, setInput] = useState("");
  const HandlerInput = (e) => {
    setInput(e.target.value);
  };

  return [input, HandlerInput];
}
