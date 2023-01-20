import React from "react";
import { LetterIcon } from "../configs/icons";

const Contact = () => {
  return (
    <div id="contact" className="w-full text-center">
      <section className="group h-72 flex flex-col items-center justify-center my-32">
        <h3 className="text-3xl font-bold gap-x-2 flex items-center">
          <span className="p-4 rounded-full text-[#5651e5]">
            <LetterIcon />
          </span>
          Get In Touch
        </h3>
        <p className="my-3 text-center text-gray-700">
          I'm always looking for new opportunities, I'm currently looking for an
          awesome Blockchain or Web Development team to code with.
        </p>
        <a
          href="mailto:jesalthakur77984@gmail.com"
          className="text-white px-16 py-3.5 mt-8 text-xl bg-[#5651e5] bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500"
        >
          Let's Connect
        </a>
      </section>
    </div>
  );
};

export default Contact;
