import React from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "projects",
  },
  {
    id: 3,
    link: "about",
  },
  {
    id: 4,
    link: "skills",
  },
  {
    id: 5,
    link: "contact",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-stretch max-w-screen-lg mx-auto gap-y-6 py-12 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-6 md:gap-y-0">
        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <Link key={id} href={`/#${link}`}>
              <li className="mr-4 cursor-pointer text-[#5651e5] text-sm uppercase duration-200 ease-out hover:scale-105">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Developer Portfolio All Rights
          Reserved.
        </span>
        <span className="flex items-center text-sm">
          Made with
          <span className="p-1">
            <FaHeart style={{ color: "red" }} />
          </span>
          By Jesal.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
