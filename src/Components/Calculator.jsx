import { useState } from "react";

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`text-xl sm:text-2xl md:text-3xl bg-gray-800 text-white rounded-lg p-4 transition hover:bg-gray-700 ${className}`}
  >
    {children}
  </button>
);

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <div className="mb-4 bg-gray-100 rounded-lg p-4 text-right">
          <div className="text-gray-500 text-sm">{input || "0"}</div>
          <div className="text-2xl font-bold text-black">{result || "0"}</div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn, i) => (
            <Button
              key={i}
              onClick={() => handleClick(btn)}
              className={btn === "=" ? "col-span-2 bg-green-600 hover:bg-green-500" : ""}
            >
              {btn}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
