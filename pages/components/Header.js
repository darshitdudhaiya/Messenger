import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white transition-all border border-gray-200" +
          (scrollActive ? " shadow-md pt-0" : " py-2")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-2">
          <div className="col-start-1 col-end-2 flex items-center cursor-pointer">
            <Link href='/'>
              <LogoVPN className="h-8 w-auto" />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-[#F53855] animation-active "
                  : " text-black-500 hover:text-[#F53855] a")
              }
            >
              Home
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-[#F53855] animation-active "
                  : " text-black-500 hover:text-[#F53855] ")
              }
            >
              Features
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-[#F53855] animation-active "
                  : " text-black-500 hover:text-[#F53855] a")
              }
            >
              About
            </LinkScroll>

          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/components/Signin">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-[#F53855] transition-all">
                Sign In
              </a>
            </Link>
            <Link href="/components/Signup">
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-[#F53855] text-[#F53855] bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-[#F53855] hover:text-white transition-all hover:shadow-[#F53855] ">
                Sign up
              </button>
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white sm:px-3">
          <ul className="flex w-full justify-center items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "home"
                  ? "  border-orange-500 text-[#F53855]"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Home
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-[#F53855]"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Features
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-[#F53855]"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
