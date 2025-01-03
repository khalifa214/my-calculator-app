import Calculator from "./calculator";
import GeometryLayout from "./geometry-layout";

const LayOut = () => {

    return (
        <div className="w-full min-h-screen bg-blueBg md:flex px-[10px] py-[20px]">
            <div className="w-full flex justify-center items-center p-[5px]">
                <Calculator/>
            </div>
            <div className="w-full flex justify-center items-center p-[5px] pr-[20px]">
                <GeometryLayout/>
            </div>
        </div>
    )
}

export default LayOut;