/* eslint-disable */

"use client";

// import { FaLocationArrow, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTensorflow, SiOpencv, SiPuppeteer, SiStripe, SiFirebase } from "react-icons/si";

import { projects } from "@/data";
import { PinContainer } from "./3d-pin";

// Define the icon components
// const iconComponents = {
//   python: <FaPython />,
//   react: <FaReact />,
//   nodejs: <FaNodeJs />,
//   tensorflow: <SiTensorflow />,
//   opencv: <SiOpencv />,
//   puppeteer: <SiPuppeteer />,
//   stripe: <SiStripe />,
//   firebase: <SiFirebase />,
// };

// Type guard to check if the key is a valid icon key
// const isValidIconKey = (key: string): key is keyof typeof iconComponents => {
//   return key in iconComponents;
// };

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {/* {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {isValidIconKey(icon) && iconComponents[icon]}
                    </div>
                  ))} */}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Please check back later 
                  </p>
                  {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
