import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { multiply } from "./calculatorSlice";
import { add } from "./calculatorSlice";
import { subtract } from "./calculatorSlice";
import { divide } from "./calculatorSlice";


const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const calculatorState = useSelector((state) => state.Calculator);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <button onClick={() => dispatch(add(parseFloat(inputValue)))}>Add</button>
      <button onClick={() => dispatch(subtract(parseFloat(inputValue)))}>Subtract</button>
      <button onClick={() => dispatch(multiply(parseFloat(inputValue)))}>Multiply</button>
      <button onClick={() => dispatch(divide(parseFloat(inputValue)))}>Divide</button>
      <p>Result: {calculatorState}</p>
    </div>
  );
};

export default Calculator;
