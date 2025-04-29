import { useState, useEffect } from "react";

const Calculator = () => {
    let [calculatorActive, setCalculatorActive] = useState(false);
    let [currDisplay, setCurrDisplay] = useState("")
    let [prevDisplay, setPrevDisplay] = useState("")
    let [operation, setOperation] = useState("")

    const handleClickCalculator = () => {
        setCalculatorActive(!calculatorActive);
        setCurrDisplay("")
        setPrevDisplay("")
        operation("")
    }

    const handleClickNumber = (num) => {
        setCurrDisplay(currDisplay += num)
        // console.log(currDisplay);
    }

    const handleClickOperation = (operand) => {
        compute(operand);
        setOperation(operand);
        setCurrDisplay(currDisplay += operand) 
        setPrevDisplay(currDisplay);
        setCurrDisplay("")
    }

    function compute(operand) {
      let result;
      const previousValue = parseFloat(prevDisplay);
      const currentValue = parseFloat(currDisplay);

      if (isNaN(previousValue) || isNaN(currentValue)) return;

      switch (operation) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          result = previousValue / currentValue;
          break;
        default:
          break;
      }
      setCurrDisplay(result);
    }

    const handleClickEqual = () => {
        compute();
        setPrevDisplay("");
    }

    const handleClickDelete = () => {
        setCurrDisplay(currDisplay.slice(0,-1))
    }

    const handleClickClear = () => {
        setCurrDisplay("");
        setPrevDisplay("");
    }

    return (
        <>
            <span className="p-4 rounded-xl border border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-700 cursor-pointer hover:shadow-md transition-all duration-200" onClick={handleClickCalculator}>Kalkulator</span>
            <section className={`fixed top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-sky-200/75 via-sky-100/75 to-sky-200/75 flex justify-center items-center transition-all duration-200 ${calculatorActive ? "w-full h-screen opacity-100 z-30" : "size-0 opacity-0"}`}>
                {/* <i className="absolute top-3 right-3 bi-x-lg text-gray-200 hover:text-sky-700 cursor-pointer" id="calculatorSectionClose"></i> */}
                <div className="rounded-xl p-4 w-3/12 shadow-black/50 shadow-lg bg-gradient-to-t from-sky-800 to-sky-600">
                    <div className="w-full rounded-lg h-20 bg-gradient-to-b from-sky-500 to-sky-300 ring-4 ring-sky-800 text-end text-4xl text-sky-900 font-mono flex justify-end items-end output break-all overflow-hidden">
                        <div className="prev-display">{prevDisplay}</div>
                        <div className="curr-display">{currDisplay}</div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
                        <div className="w-full flex justify-center items-center gap-2">
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-slate-400 to-slate-200 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-500 hover:text-gray-700" onClick={handleClickCalculator}><i className="bi-x-lg"></i></button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-red-900 to-red-700 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white clear" onClick={handleClickClear}>CLR</button>
                            <button className={`rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-yellow-900 to-yellow-700 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white delete ${currDisplay == "" ? "pointer-events-none" : ""}`} onClick={handleClickDelete}><i className="bi-arrow-left"></i></button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white operation" onClick={() => handleClickOperation("/")}>/</button>
                        </div>
                        <div className="w-full flex justify-center items-center gap-2">
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(1)}>1</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(2)}>2</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(3)}>3</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white operation" onClick={() => handleClickOperation("+")}>+</button>
                        </div>
                        <div className="w-full flex justify-center items-center gap-2">
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(4)}>4</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(5)}>5</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(6)}>6</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white operation" onClick={() => handleClickOperation("-")}>-</button>
                        </div>
                        <div className="w-full flex justify-center items-center gap-2">
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(7)}>7</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(8)}>8</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(9)}>9</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white operation" onClick={() => handleClickOperation("*")}>*</button>
                        </div>
                        <div className="w-full flex justify-center items-center gap-2">
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(".")}>.</button>
                            <button className="rounded-lg w-1/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white number" onClick={() => handleClickNumber(0)}>0</button>
                            <button className="rounded-lg w-2/4 h-12 bg-gradient-to-t hover:bg-gradient-to-b duration-150 from-sky-800 to-sky-600 shadow-black/50 shadow-md flex justify-center items-center text-2xl font-bold text-gray-400 hover:text-white equal" onClick={handleClickEqual}>=</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Calculator
