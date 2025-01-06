import { useContext } from "react";
import { CalculatorContexts } from "../contexts/context";

const TriangleForm = () => {

    const { result, countTriangleFormHandler, onChangeInput, currentFormula } = useContext(CalculatorContexts);

    return (
        <form onSubmit={countTriangleFormHandler}>
            {currentFormula === "keliling" &&
                <>
                    <label htmlFor="sisiA">Sisi A</label>
                    <div className="mb-[5px]">
                        <input onChange={onChangeInput} id="sisiA" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
                        <p className="inline-block ml-[10px] tracking-[1px]">cm</p>
                    </div>
                    <label htmlFor="sisiB">sisi B</label>
                    <div className="mb-[5px]">
                        <input onChange={onChangeInput} id="sisiB" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
                        <p className="inline-block ml-[10px] tracking-[1px]">cm</p>
                    </div>
                    <label htmlFor="sisiC">Sisi C</label>
                    <div className="mb-[5px]">
                        <input onChange={onChangeInput} id="sisiC" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
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
                </>  
            }
            {currentFormula === "luas" &&
                <>
                    <label htmlFor="alas">Alas (a)</label>
                    <div className="mb-[5px]">
                        <input onChange={onChangeInput} id="alas" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
                        <p className="inline-block ml-[10px] tracking-[1px]">cm</p>
                    </div>
                    <label htmlFor="tinggi">Tinggi (t)</label>
                    <div className="mb-[5px]">
                        <input onChange={onChangeInput} id="tinggi" type="number" className="w-[200px] text-gray-700 border-[2px] border-gray-300 rounded-lg focus:outline-blueBg py-[3px] px-[10px]" required /> 
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
                </>  
            }
        </form>
    )
}

export default TriangleForm;