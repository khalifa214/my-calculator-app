import { useContext } from "react";
import { CalculatorContexts } from "../contexts/context";
import SquareForm from "./square-form";
import RectangleForm from "./rectangle-form";
import CircleForm from "./circle-form";
import TriangleForm from "./triangle-form";

const FormLayout = () => {

    const { currentFormula, currentPlaneFigure } = useContext(CalculatorContexts);

    return (
        <div className="w-[400px] lg:w-[300px] rounded-2xl overflow-hidden border-[1.5px] border-gray-200 m-[10px] shadow-formShadow">
            <img src="./formula-image.jpg" alt="" className="w-full h-[100px] object-cover border-b-[2px] border-blueBg" />
            { (!currentFormula || !currentPlaneFigure) && 
                (
                    <div className="w-full h-[250px] bg-gray-200 opacity-60">

                    </div>
                )
            }
            { (currentPlaneFigure && currentFormula) && 
                (
                    <div className="w-[80%] mx-auto my-[20px] min-h-[200px]">
                        { currentPlaneFigure === "square" && 
                            <SquareForm/>
                        }
                        { currentPlaneFigure === "rectangle" && 
                            <RectangleForm/>
                        }
                        { currentPlaneFigure === "circle" && 
                            <CircleForm/>
                        }
                        { currentPlaneFigure === "triangle" && 
                            <TriangleForm/>
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default FormLayout;