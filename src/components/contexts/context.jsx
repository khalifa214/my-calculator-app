import { createContext, useState } from "react";
import * as math from "mathjs";

export const CalculatorContexts = createContext();

const CalculatorProvider = (props) => {
    const [inputValue, setInputValue] = useState("");

    const buttonHandler = (event) => {
        setInputValue(prevValue => prevValue + event.target.value);
    }

    const removeLastCharHandler = () => {
        setInputValue((prevValue) => prevValue.slice(0, -1));
    }

    const countCalculatorHandler = () => {
        const result = math.evaluate(inputValue.replace('x', '*'));
        setInputValue(String(result));
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

