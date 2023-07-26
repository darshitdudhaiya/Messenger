import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  feature = [
    {
      name: "Messenger Web App",
      description:
        "Messenger is a free to Web app that was built with the small chetting owner in mind. Create a profile.",
    },
    {
      name: "Simple & Reliable messaging",
      description:
        "Message your friends and family for free*. Messenger uses your phone's Internet connection to send messages so you can avoid SMS fees",
    },
    {
      name: "Share Moments",
      description:
        "Send photos and videos on Messenger instantly. You can even share the moments. With Messenger, photos and videos send quickly even if you're on a slow connection.",
    },
    {
      name: "Groups to keep in touch",
      description:
        "Keep in touch with the groups of people that matter the most, like your family or friends. With group chats, you can share messages, photos with people at once.",
    },
    {
      name: "Keep the Conversation",
      description:
        "With Messenger on the web, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you.",
    },
    {
      name: "Security by Default",
      description:
        "When end-to-end encrypted, your messages are secured so only you and the person you're communicating with can read them, and nobody in between, not even Messenger.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {feature.map((features, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-[#F53855] transition-all rounded-lg p-8 flex flex-col h-60">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div>
                  <strong>
                    {features.name}
                  </strong>
                </div>
              </div>
              <p className="mt-5 text-left">“{features.description}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-[#F53855] border hover:bg-[#F53855] hover:text-white transition-all text-[#F53855] cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-[#F53855] border hover:bg-[#F53855] hover:text-white transition-all text-[#F53855] cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
