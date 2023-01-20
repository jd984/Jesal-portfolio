import React from "react";
import Kobe from "../../public/kobe.jpg";
import { FaGithub } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "react weather app",
    imageSrc: Kobe,
    url: "react-weather",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at soluta. Voluptate incidunt temporibus tempora, earum esse placeat et ex ipsa, molestias sunt recusandae inventore. Et quasi laudantium laborum amet",
  },
  {
    id: 2,
    title: "install node",
    imageSrc: Kobe,
    url: "install-node",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at soluta. Voluptate incidunt temporibus tempora, earum esse placeat et ex ipsa, molestias sunt recusandae inventore. Et quasi laudantium laborum amet",
  },
  {
    id: 3,
    title: "use state explained",
    imageSrc: Kobe,
    url: "use-state-hook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at soluta. Voluptate incidunt temporibus tempora, earum esse placeat et ex ipsa, molestias sunt recusandae inventore. Et quasi laudantium laborum amet",
  },
  {
    id: 4,
    title: "react parallax scroll",
    imageSrc: Kobe,
    url: "react-parallax",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at soluta. Voluptate incidunt temporibus tempora, earum esse placeat et ex ipsa, molestias sunt recusandae inventore. Et quasi laudantium laborum amet",
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const SinglePortfolio = ({ portfolio: { title, imageSrc, description } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-gray-700 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center text-gray-700 md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>{description}</p>

        <div className="flex items-center justify-center gap-10">
          <Link target="_blank" href="/">
            <div className="group flex items-center justify-center my-8 bg-[#5651e5] bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500 text-white px-6 py-3 font-bold uppercase tracking-wider cursor-pointer">
              demo
            </div>
          </Link>

          <Link target="_blank" href="https://github.com/jd984">
            <div className="group flex items-center justify-center my-8 bg-[#5651e5] bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500 text-white px-6 py-3 font-bold uppercase tracking-wider cursor-pointer">
              Github
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;
