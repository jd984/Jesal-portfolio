import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="w-full h-20 bg-[#ecf0f3] shadow-xl fixed z-10 text-gray-700 duration-300 ease-in">
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <div>
          <ul className="hidden md:flex">
            {links.map(({ link, id }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 cursor-pointer text-sm uppercase duration-200 ease-out hover:scale-105 tracking-widest">
                  {link}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Resume button */}
        <div className="hidden md:flex item center">
          <Link
            target="_blank"
            href="/Jesal Resume.pdf"
            download={true}
            className="flex items-center mr-4 tracking-widest hover:scale-105 text-fore-primary border-2 border-[#5651e5] w-fit px-4 py-1 rounded cursor-pointer  transition-colors"
          >
            Resume
          </Link>
        </div>

        {/* For mobile view */}
        {!navigation && (
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setNavigation(true)}
          >
            <FaBars size={25} />
          </div>
        )}
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur-0"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 ease-in duration-500 p-10 text-white"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-300"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link onClick={() => setNavigation(false)} href="/">
                <h2 className="text-2xl font-bold underline underline-offset-2 tracking-wider cursor-pointer">
                  Jesal
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={25} />
              </div>
            </div>
          </div>

          {/* Mobile view links */}
          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ link, id }) => (
                <Link
                  onClick={() => setNavigation(false)}
                  key={id}
                  href={`/#${link}`}
                >
                  <li className="py-4 text-xl tracking-wider cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <Link target="_blank" href="/Jesal-Resume.pdf">
              <p className="shadow-xl p-4 w-fit tracking-widest rounded-lg uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                Resume
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
