import { createContext, useState } from "react";
import * as math from "mathjs";

export const CalculatorContexts = createContext();

const CalculatorProvider = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [resetValue, setResetValue] = useState(false); 

    const buttonHandler = (event) => {
        if (inputValue !== "" && resetValue === true) {
            if (event.target.value == "x" || event.target.value == "/" || event.target.value == "+" || event.target.value == "-") {
                setInputValue(prevValue => prevValue + event.target.value);
                setResetValue(false);
            } else {
                setResetValue(false);
                setInputValue("");
                setInputValue(prevValue => prevValue + event.target.value);
            }
        } else {
            setInputValue(prevValue => prevValue + event.target.value);
        }
    }

    const removeLastCharHandler = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    }

    const countCalculatorHandler = () => {
        const result = math.evaluate(inputValue.replace(/x/g, '*'));
        setInputValue(String(result));
        setResetValue(true);
    }

    return (
        <CalculatorContexts.Provider value={
            {
                buttonHandler,
                inputValue,
                setInputValue,
                removeLastCharHandler,
                countCalculatorHandler
            }
        }>
            {props.children}
        </CalculatorContexts.Provider>
    );
}

export default CalculatorProvider;

