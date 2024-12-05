import Calculator from "./calculator";

const LayOut = () => {

    return (
        <div className="w-full min-h-screen bg-gray-100 md:flex px-[10px] py-[20px]">
            <div className="w-full md:h-[93vh] flex justify-center items-center p-[5px]">
                <Calculator/>
            </div>
            <div className="w-full bg-blue-300 h-[200px]">

            </div>
        </div>
    )
}

export default LayOut;