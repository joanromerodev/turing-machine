/* eslint-disable react/prop-types */
import { PiStarFill } from "react-icons/pi";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [hideHeader, setHideHeader] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHideHeader(latest > 0);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <div className="grid lg:min-h-screen">
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: hideHeader ? 0 : 1 }}
        className="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed"
        id="topnav"
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="w-full flex flex-row">
            <div
              className="w-full flex flex-row justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 "
              id="navbar"
            >
              <ul className="hidden lg:flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#instructionsSection"
                    className="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Instructions
                  </a>
                </li>
              </ul>
              <a href="/" className="flex items-center">
                <img src="img/logotipo.svg" className="w-40" />
              </a>
              <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                <a
                  href="https://github.com/joanromerodev/turingmachine"
                  target="_blank"
                >
                  <button className="flex flex-row items-center gap-2 border border-indigo-600 bg-white text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-600 hover:text-white">
                    <p>Star This Project</p>
                    <PiStarFill className="size-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      <section className="flex flex-col justify-center items-center pt-8 lg:pt-32 bg-[url('/img/image_background.png')] bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div>
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-3xl text-gray-900 mb-5 md:text-3xl leading-[50px]">
              See how <span className="text-indigo-600">Turing Machine </span>
              from Alan Turing works.
            </h1>
            <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
              Turing is widely considered to be the father of theoretical
              computer science.
            </p>
          </div>
          <motion.div></motion.div>
        </div>
        {children}
      </section>
      <footer className="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
        <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
            target="_blank"
          >
            Turingear
          </a>
          . All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-1">
          <a
            href="https://github.com/joanromerodev"
            className="inline-flex justify-center p-2 text-indigo-500 rounded-lg cursor-pointer hover:text-indigo-900 hover:bg-indigo-100"
            target="_blank"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://www.youtube.com/@joanromerodev"
            className="inline-flex justify-center p-2 text-indigo-500 rounded-lg cursor-pointer hover:text-indigo-900 hover:bg-indigo-100"
            target="_blank"
          >
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
              xmlSpace="preserve"
              fill="currentColor"
            >
              <path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z" />
            </svg>
            <span className="sr-only">Youtube</span>
          </a>
          <a
            href="https://linkedin.com/in/joanromerodev"
            className="inline-flex justify-center p-2 text-indigo-500 rounded-lg cursor-pointer hover:text-indigo-900 hover:bg-indigo-100"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="sr-only">Linkedin</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
