import React, { useMemo } from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
function Hero() {
  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="home"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          >
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Messenger makes it easy and fun to stay close to <strong> your favourite people.</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                
              </p>
              <Link href='/components/Signup'>
                <button className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-[#F53855] hover:shadow-[#F53855]-md transition-all outline-none ">Get Started</button>
              </Link>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full">
                <Image
                  src="/assets/images/3156814.jpg"
                  // src="/assets/images/7495.jpg"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
    </div>) 
}

export default Hero;
