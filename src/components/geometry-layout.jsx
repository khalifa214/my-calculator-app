import { useContext } from "react";
import FormLayout from "./geometry-form/form-layout";
import { CalculatorContexts } from "./contexts/context";

const GeometryLayout = () => {

    const{ setCurrentFormula, setCurrentPlaneFigure, setResult } = useContext(CalculatorContexts);

    return (
        <div className="w-full rounded-2xl bg-white shadow-borderShadow border-[2px] border-blueShadow overflow-hidden">
            <nav className="h-[50px] flex items-center px-[20px] border-b-[4px] border-gray-200">
                <h1 className="text-[20px] text-blueTitle font-bold tracking-[2px]">
                    Bangun Datar
                </h1>
            </nav>
            <div className="w-full min-h-[85vh] flex flex-col lg:flex-row">
                <div className="w-full flex justify-center items-center p-[10px] flex-col lg:h-[60vh]">
                    <h1 className="text-[20px] text-gray-700 text-center font-bold tracking-[1px]">
                        Pilih bangun datar yang ingin anda hitung.
                    </h1>
                    <form className="mt-[30px] flex flex-col">
                        <select 
                        name="planeFigure" 
                        className="w-[200px] text-gray-500 border-[2px] border-gray-300 rounded-lg hover:border-blueBg focus:outline-none"
                        onChange={() => {
                            setCurrentPlaneFigure(event.target.value);
                            setResult("");
                        }}
                        >
                            <option value="">Pilih Bangun Datar...</option>
                            <option className="text-gray-700" value="square">Persegi (Square)</option>
                            <option className="text-gray-700" value="rectangle">Persegi Panjang (Rectangle)</option>
                            <option className="text-gray-700" value="circle">Lingkaran (Circle)</option>
                            <option className="text-gray-700" value="triangle">Segitiga (Triangle)</option>
                        </select>
                        <select 
                        name="formula" 
                        className="w-[200px] text-gray-500 border-[2px] border-gray-300 rounded-lg hover:border-blueBg focus:outline-none mt-[20px]"
                        onChange={()=> {
                            setCurrentFormula(event.target.value);
                            setResult("");
                        }}
                        >
                            <option value="">Pilih Rumus...</option>
                            <option className="text-gray-700" value="keliling">Keliling (Circumference)</option>
                            <option className="text-gray-700" value="luas">Luas (Area)</option>
                        </select>
                    </form>
                </div>
                <div className="w-full flex justify-center items-center flex-1">
                    <FormLayout/>
                </div>
            </div>
        </div>
            
    )
}

export default GeometryLayout;