import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <>
      <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <div>
            <p className="uppercase tracking-widest text-gray-600 text-sm">
              eager learner
            </p>
            <h1 className="py-2 text-gray-700">
              Hi, I'm <span className="text-[#5651e5]">Jesal</span> <br /> a
              Blockchain & Frontend Developer.
            </h1>
            <p className="py-4 text-gray-600 m-auto max-w-[70%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              excepturi mollitia nemo laborum. Ratione, adipisci. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas, magnam aut.
              Ullam voluptatibus obcaecati, atque mollitia deleniti laboriosam
              velit dolores tenetur minima blanditiis debitis id inventore
              repellat adipisci ea nostrum.
            </p>
            <div className="flex items-center gap-4 justify-between m-auto p-4 max-w-[330px]">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jesalthakur984/"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedin />
                </div>
              </Link>
              <Link target="_blank" href="https://github.com/jd984">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </Link>

              <Link target="_blank" href="mailto:jesalthakur77984@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
