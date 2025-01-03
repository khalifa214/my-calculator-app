import { createContext, useState } from "react";
import * as math from "mathjs";

export const CalculatorContexts = createContext();

const CalculatorProvider = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [resetValue, setResetValue] = useState(false);
    const [currentPlaneFigure, setCurrentPlaneFigure] = useState("");
    const [currentFormula, setCurrentFormula] = useState(""); 
    const [inputData, setInputData] = useState("");
    const [result, setResult] = useState("");

    const buttonHandler = (event) => {
        if (inputValue !== "" && resetValue === true) {
            const operator = "+-/x";
            if (operator.includes(event.target.value)) {
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

    //fungsi fungsi untuk geometri
    const onChangeInput = (event) => {
        const {id, value} = event.target;
        setInputData({...inputData, [id]: value});
    };

    const countSquareFormHandler = (event) => {
        event.preventDefault();
        if (currentFormula === "keliling") {
            setResult(4*parseFloat(inputData.sisi));
        }
        if (currentFormula === "luas") {
            setResult(parseFloat(inputData.sisi)**2);
        }
    }

    return (
        <CalculatorContexts.Provider value={
            {
                //calculator
                buttonHandler,
                inputValue,
                setInputValue,
                removeLastCharHandler,
                countCalculatorHandler,
                //geometry
                onChangeInput,
                currentFormula,
                currentPlaneFigure,
                setCurrentFormula,
                setCurrentPlaneFigure,
                result,
                setResult,
                countSquareFormHandler
            }
        }>
            {props.children}
        </CalculatorContexts.Provider>
    );
}

export default CalculatorProvider;

