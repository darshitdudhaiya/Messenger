import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-gray-50 py-14">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-1 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - LaslesVPN</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Resources</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              <Link href='https://tailwindcss.com/'>
                Tailwind
              </Link>
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              <Link href='https://stackoverflow.com/'>
                Stack overflow
              </Link>
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              <Link href='https://socket.io/'>
                Socket.io
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Pages</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              <Link href='/components/Signup'>
                Signup
              </Link>
            </li>
            <li className="my-2 hover:text-[#F53855] cursor-pointer transition-all">
              <Link href='/components/Signin'>
                Signin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
