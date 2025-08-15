import React from "react";
import { useState } from "react";

const Button = ({ children , onClick, className = "" }) => (
    <button
  onClick = { onClick }
  className = {`p-4 border-black  rounded-xl bg-slate-500 text-2xl font-bold text-slate-950gti border ${className}`}
>
    {children}
    </button>
);

const Calculator2 = () => {
  const [ input, setInput ] = useState("");
  const [ result, setResult ] = useState("");

  const handlebutton = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  let buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    ".",
    "+",
    "=",
  ];
  return (
    <div className="max-w-full bg-slate-950 h-screen flex justify-center items-center">
      <div className="w-full max-w-sm bg-slate-300 rounded-xl mx-auto h-[70%]  p-6">
        <div className="bg-slate-900 mb-4 p-3 rounded-2xl text-2xl  text-white text-right">
          <div className="py-2  text-sm">{input || "0"}</div>
          <div>{result || "0"}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <Button
              key={i}
              onClick={() => handlebutton(btn)}
              className={btn ==="=" ? "col-span-4" : "" }
            >
              <P>Calculator</P>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator2;
