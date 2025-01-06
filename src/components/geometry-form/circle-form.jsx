import { useContext } from "react";
import { CalculatorContexts } from "../contexts/context";

const CircleForm = () => {

    const { result, countCircleFormHandler, onChangeInput, currentFormula } = useContext(CalculatorContexts);

    return (
        <form onSubmit={countCircleFormHandler}>
            <label htmlFor="jariJari">Jari-jari (r)</label>
            <div className="mb-[5px]">
                <input onChange={onChangeInput} id="jariJari" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
                <p className="inline-block ml-[10px] tracking-[1px]">cm</p>
            </div>

            <button type="submit" className="w-[150px] bg-blueBg mx-auto mt-[15px] py-[7px] rounded-xl text-white block hover:bg-blue-600 active:ring-2 active:ring-blue-600 active:ring-offset-2 transition-colors duration-500">
                Hitung
            </button>
            <div className="h-[40px] mt-[20px]">
                {result &&
                    <h1 className="mx-auto w-fit text-[18px]">
                        {currentFormula.charAt(0).toUpperCase() + currentFormula.slice(1)} : <strong>{result}</strong> cm
                    </h1>
                }
            </div>
        </form>
    )
}

export default CircleForm;