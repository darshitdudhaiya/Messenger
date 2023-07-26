import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const about = [
  {
    title:"Lightning-Fast Messaging:",
    data:'Experience real-time messaging that delivers your messages instantly. No more waiting for responses - have smooth, uninterrupted conversations.'
  },
  {
    title:"Intuitive User Interface:",
    data:'Your privacy is our top priority. Messenger uses cutting-edge end-to-end encryption to ensure that your messages secure from prying eyes.'
  },
  {
    title:"End-to-End Encryption:",
    data:'Our sleek and user-friendly interface makes navigating Messenger a breeze. Enjoy a seamless chat experience without any unnecessary clutter.'
  }
]

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper className="flex w-full justify-end" id="about">
      <motion.div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-5">
          <div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>

          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-3xl lg:text-4xl font-semibold leading-relaxed text-[#F53855]">
                Why You Choose Us
              </h3>
              <p className="my-2 text-black-500">
                  <strong>Welcome to Messenger </strong>Say goodbye to slow messaging and hello to instant connections with friends, family, and colleagues. With Messenger, staying in touch has never been easier or more enjoyable.
              </p>
              <ul className="text-black-500 list-inside ml-8">
                {about.map((feature, index) => (
                  <motion.li className="relative circle-check custom-list" custom={{ duration: 2 + index }} variants={scrollAnimation} key={feature}>
                    <strong>{feature.title}</strong>
                    <p>{feature.data}</p>
                  </motion.li>
                )
                )}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default About;
