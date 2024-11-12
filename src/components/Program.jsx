import { useState, useRef, useEffect } from "react";
import SliderTape from "./layout/SliderTape";
import TapeJSON from "../config/tape.json";
import ProgramJSON from "../config/program.json";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Program() {
  const { states, translation } = ProgramJSON;
  const [start, setStart] = useState(false);
  const [results, setResults] = useState([]);
  const [currentState, setCurrentState] = useState(states[0].name);
  const [slides, setSlides] = useState([" ", "0", "1", "0"]);
  const sliderTapeRef = useRef(null);
  const currentStateRef = useRef(currentState);
  let readAudio = new Audio("/sounds/read.wav");
  let stopAudio = new Audio("/sounds/stop.mp3");
  useEffect(() => {
    currentStateRef.current = currentState;
  }, [currentState]);
  const definitions = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value) ? Number(value) : " ";
  };
  const startProgram = () => {
    setResults([]);
    setStart(true);
    setTimeout(() => {
      const decomposedTape = decomposeTape(TapeJSON);
      setSlides(decomposedTape);
      tapeInterpreter(decomposedTape);
    }, 1000);
  };
  const stopProgram = () => {
    setStart(false);
    toast.success("Successfully completed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const decomposeTape = (tapeJson) => {
    let tapeDecomposed = [];
    tapeJson.map((binarySet) => {
      tapeDecomposed.push(binarySet.split(""));
    });
    const finalDecomposed = tapeDecomposed
      .map((item) => item.join(""))
      .join(" ")
      .split("");
    return [" ", ...finalDecomposed, " ", " "];
  };
  const tapeInterpreter = async (decomposedTape) => {
    let tempArray = [];
    let finalArray = [];
    decomposedTape.splice(0, 1);
    for (const item of decomposedTape) {
      if (item === " " && tempArray.length > 0) {
        finalArray.push(tempArray.join(""));
        tempArray = [];
      } else {
        tempArray.push(item);
      }
      const newState = processRule(item); // Process the rule
      if (newState && newState !== currentStateRef.current) {
        setCurrentState(newState); // Update React state
        currentStateRef.current = newState; // Update ref for next iteration
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    let finalResult = [];
    finalArray.map((itemBinary) => {
      const translationItem = translation.find(
        (item) => item.binary === itemBinary
      );
      finalResult.push(translationItem.translated);
    });
    setResults(finalResult);
  };
  const processRule = (binary) => {
    let newState = currentStateRef.current; // Use ref to get latest state

    states.forEach((state) => {
      if (state.name === currentStateRef.current) {
        state.rules.forEach((rule) => {
          if (definitions(rule.key) === definitions(binary)) {
            if (rule.value === "moveRight") {
              sliderTapeRef.current.nextSlide();
              readAudio.volume = 0.7;
              readAudio.play();
            }
            if (rule.value === "moveLeft") {
              sliderTapeRef.current.prevSlide();
              readAudio.volume = 0.7;
              readAudio.play();
            }
            if (rule.value === "stop") {
              stopProgram();
              stopAudio.volume = 0.7;
              stopAudio.play();
            }
            newState = rule.nextState;
          }
        });
      }
    });

    return newState;
  };
  return (
    <>
      {results.length > 0 ? (
        <div className="mx-auto">
          <p className="font-poppins text-gray-800 font-medium text-lg text-center mt-6 mb-12">
            Results
          </p>
          <div className=" flex flex-row gap-2">
            {results.map((singleResult, index) => (
              <div
                key={index}
                className="shadow p-4 rounded-lg border font-poppins font-medium text-lg uppercase"
              >
                {singleResult}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={`mt-20 mb-10 relative ${!start && "blur"}`}>
          <img
            src="img/left_tape_roll.png"
            className="size-32 h-[126px] absolute -left-28 -top-[48px]"
          />
          <SliderTape ref={sliderTapeRef} slides={slides} />
          <img
            src="img/right_tape_roll.png"
            className="size-32 h-[125px] absolute -right-[112px] -top-[45px]"
          />
          <img
            src="img/reader.png"
            className="size-24 w-40 absolute left-[192px] -top-[9px]"
          />
          <div className="absolute p-5 left-52 top-[87px] border border-red-300 bg-red-50 w-32 h-10 rounded-b-lg flex items-center justify-center gap-2">
            <div
              className={`bg-red-500 border border-red-800 w-4 h-4 rounded-full ${
                start && "animate-pulse"
              }`}
            ></div>
          </div>
        </div>
      )}
      {!start && (
        <div
          className={`flex justify-center ${
            results.length > 0 ? "my-14" : "my-20"
          }`}
        >
          <button
            onClick={startProgram}
            className="px-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-700 text-white font-poppins transition-all ease-in duration-100 hover:scale-110"
          >
            {results.length > 0 ? "Restart" : "Start"}
          </button>
        </div>
      )}
      {start && (
        <div
          className={`flex justify-center ${
            results.length > 0 ? "my-14" : "my-20"
          }`}
        >
          <button
            className="px-6 py-2 rounded-xl bg-gray-300 flex flex-row items-center justify-center gap-2"
            disabled
          >
            <p className="text-gray-500 font-poppins">Running</p>
            <div role="status">
              <svg
                aria-hidden="true"
                className="size-5 text-gray-200 animate-spin fill-gray-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Program;
