import { useContext } from "react";
import { CalculatorContexts } from "./contexts/context";

const Calculator = () => {
    const buttonStyle = "relative top-0 text-[20px] bg-gray-100 rounded-md py-[3px] shadow-buttonShadow active:shadow-none active:top-[5px] transition-all duration-100";

    const { buttonHandler, inputValue, setInputValue, removeLastCharHandler, countCalculatorHandler } = useContext(CalculatorContexts);

    return (
        <div className="max-w-[400px] p-[20px] bg-gray-300 rounded-lg border-2 border-solid border-gray-600">
            <input value={inputValue} className="bg-white rounded-md w-full text-[20px] py-[2px] px-[8px]" type="text" disabled/>
            <div className="grid grid-cols-4 gap-x-3 gap-y-6 mt-[20px] relative">
                <button value="(" className={buttonStyle} onClick={buttonHandler}>
                    (
                </button>
                <button value=")" className={buttonStyle} onClick={buttonHandler}>
                    )
                </button>
                <button className={buttonStyle} onClick={() => setInputValue("")}>
                    C
                </button>
                <button className={`${buttonStyle} fas fa-backspace`} onClick={removeLastCharHandler}>
                </button>

                <button value="1" className={buttonStyle} onClick={buttonHandler}>
                    1
                </button>
                <button value="2" className={buttonStyle} onClick={buttonHandler}>
                    2
                </button>
                <button value="3" className={buttonStyle} onClick={buttonHandler}>
                    3
                </button>
                <button value="/" className={buttonStyle} onClick={buttonHandler}>
                    /
                </button>

                <button value="4" className={buttonStyle} onClick={buttonHandler}>
                    4
                </button>
                <button value="5" className={buttonStyle} onClick={buttonHandler}>
                    5
                </button>
                <button value="6" className={buttonStyle} onClick={buttonHandler}>
                    6
                </button>
                <button value="x" className={buttonStyle} onClick={buttonHandler}>
                    x
                </button>

                <button value="7" className={buttonStyle} onClick={buttonHandler}>
                    7
                </button>
                <button value="8" className={buttonStyle} onClick={buttonHandler}>
                    8
                </button>
                <button value="9" className={buttonStyle} onClick={buttonHandler}>
                    9
                </button>
                <button value="-" className={buttonStyle} onClick={buttonHandler}>
                    -
                </button>

                <button value="0" className={buttonStyle} onClick={buttonHandler}>
                    0
                </button>
                <button value="." className={buttonStyle} onClick={buttonHandler}>
                    .
                </button>
                <button className={buttonStyle} onClick={countCalculatorHandler}>
                    =
                </button>
                <button value="+" className={buttonStyle} onClick={buttonHandler}>
                    +
                </button>

            </div>
        </div>
    )
}

export default Calculator;