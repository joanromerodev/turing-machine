import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { BsFileEarmarkBinary } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import ProgramJSON from "../config/program.json";
import TapeJSON from "../config/tape.json";

function Instructions() {
  const [selected, setSelected] = useState(
    localStorage.getItem("selected")
      ? localStorage.getItem("selected")
      : "howToUse"
  );
  const { states, statesConfig, translation } = ProgramJSON;
  const showRuleByKey = (value) => {
    const ruleFound = statesConfig.display.find((item) => item.key === value);
    return ruleFound ? ruleFound.text : null;
  };

  const setSelectedLocal = (slcted) => {
    localStorage.setItem("selected", slcted);
    setSelected(slcted);
  };

  return (
    <div className="mb-10">
      <motion.div
        whileHover={{ width: 258 }}
        className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-10 hover:cursor-pointer"
      >
        <span className="font-inter text-xs font-medium text-gray-900 ml-3">
          Machine rules and instructions.
        </span>
        <a
          href="#instructionsSection"
          className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
        >
          <IoArrowDown className="size-4 text-white" />
        </a>
      </motion.div>
      <div className="py-12" id="instructionsSection">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div
              className={`relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  transition-all ease-in-out duration-100 ${
                selected === "howToUse" &&
                "rounded-b border-b-4 border-indigo-600"
              }  pb-5`}
            >
              <button
                onClick={() => setSelectedLocal("howToUse")}
                className={`${
                  selected === "howToUse"
                    ? "bg-indigo-600"
                    : "bg-indigo-50 group-hover:bg-indigo-600"
                } rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500`}
              >
                <BsQuestionCircle
                  className={`${
                    selected === "howToUse"
                      ? "text-white"
                      : "text-indigo-600 group-hover:text-white"
                  } size-7 transition-all duration-500 `}
                />
              </button>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                How to use
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Check how to use the Turing machine. It can't be simpler
              </p>
            </div>
            <div
              className={`relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  transition-all ease-in-out duration-100 ${
                selected === "machineProgram" &&
                "rounded-b border-b-4 border-pink-600"
              }  pb-5`}
            >
              <button
                onClick={() => setSelectedLocal("machineProgram")}
                className={`${
                  selected === "machineProgram"
                    ? "bg-pink-600"
                    : "bg-orange-50 group-hover:bg-pink-600"
                } rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500`}
              >
                <svg
                  className={`${
                    selected === "machineProgram"
                      ? "stroke-white"
                      : "stroke-pink-600 group-hover:stroke-white"
                  } transition-all duration-500 `}
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                    stroke=""
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Machine Program
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Each of the different rules and states for the machine. This
                will basically make the app work.
              </p>
            </div>
            <div
              className={`relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  transition-all ease-in-out duration-100 ${
                selected === "translation" &&
                "rounded-b border-b-4 border-teal-600"
              }  pb-5`}
            >
              <button
                onClick={() => setSelectedLocal("translation")}
                className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600"
              >
                <BsFileEarmarkBinary className="size-7 text-teal-600 group-hover:text-white transition-all duration-500" />
              </button>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Translation
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Get to know how we are representing and translating the final
                outputs from binary numbers.
              </p>
            </div>
          </div>
          {selected === "howToUse" && (
            <div className="w-full bg-white p-5 my-5 rounded-lg shadow">
              <p className="text-justify text-sm font-poppins">
                To experience the workings of a Turing machine, simply click the
                <span className="font-bold"> Start</span> button above. The
                machine will read inputs from the tape, moving step-by-step
                through each cell based on predefined rules and states. At each
                step, it processes the input symbol, alters the current state as
                required, and writes back to the tape if necessary. This process
                continues until the machine reaches a halt condition, displaying
                the final result on completion.
              </p>
              <p className="text-justify text-sm font-poppins mt-2">
                By observing each transition, you’ll get insight into how Turing
                machines perform computations—demonstrating the core principles
                of computation theory that underline modern computing.
              </p>
              {/* <div className="flex justify-center items-center gap-2 font-medium text-sm bg-indigo-400 py-2 px-3 text-white rounded-lg hover:cursor-not-allowed">
                <p>Start</p>
                <FaPlay className="size-3" />
              </div>{" "} */}
              <p className="text-center font-poppins"></p>
            </div>
          )}
          {selected === "machineProgram" && (
            <div className="w-full grid grid-cols-2 bg-white p-5 my-5 rounded-lg shadow">
              <div className="p-5">
                <p className="text-center text-xl font-medium mb-4">
                  States Table
                </p>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-white uppercase bg-indigo-500 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          States
                        </th>
                        {states[0].rules.map((rule, i) => (
                          <th
                            key={i}
                            scope="col"
                            className="px-6 py-3 capitalize"
                          >
                            {rule.key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {states.map((state, i) => (
                        <tr key={i} className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            {state.name}
                          </th>
                          {state.rules.map((rule, iRule) => (
                            <td key={iRule} className="px-6 py-4">
                              <ul className="list-decimal">
                                {showRuleByKey(rule.value)?.map(
                                  (text, iText) => (
                                    <li key={iText}>
                                      {showRuleByKey(rule.value) !== null &&
                                      iText + 1 ===
                                        showRuleByKey(rule.value).length
                                        ? `${text} ${
                                            rule.nextState !== null
                                              ? rule.nextState
                                              : ""
                                          }`
                                        : text}
                                    </li>
                                  )
                                )}
                              </ul>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-5">
                <p className="text-center text-xl font-medium mb-4">
                  Definition
                </p>
                <p className="font-poppins text-sm text-justify">
                  The "Machine Program" defines the specific rules and states
                  that control how the Turing machine reads, writes, and moves
                  across the tape. Each rule consists of a condition (current
                  state and tape symbol) and an action (new state, symbol to
                  write, and tape movement). Together, these rules dictate the
                  machine's behavior and guide it towards a solution.
                </p>
              </div>
            </div>
          )}
          {selected === "translation" && (
            <div className="w-full bg-white p-5 my-5 rounded-lg shadow flex flex-col items-center justify-center">
              <div className="mb-5">
                <p className="text-center text-xl font-medium mb-4">Details</p>
                <p className="font-poppins text-sm text-center">
                  Here you'll find all the translations for the current program
                  configuration:
                </p>
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-10/12">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-white uppercase bg-indigo-500 ">
                    <tr>
                      {Object.keys(translation[0]).map((translationKey, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="px-6 py-3 text-center"
                        >
                          {translationKey}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {translation.map((translated, i) => (
                      <tr key={i} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  text-center"
                        >
                          {translated.binary}
                        </th>
                        <td className="px-6 py-4 text-center">
                          {translated.translated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Instructions;
