import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main id="about" className="w-full pt-20 ">
      <section className="max-w-[1240px] py-24 w-full h-full mx-auto p-2 justify-center items-center">
        <h3 className="text-2xl text-[#5651e5] uppercase md:text-3xl mb-8 border-b border-b-slate-200 w-fit">
          About Me
        </h3>
        <p className="mb-8">
          I am Jesal Thakur, pursuing my Bachelor's in computer engineering and
          I'm in the 8th semester. I'm looking for a job or internship in the
          field of Blockchain and Web Development.
        </p>
        <p className="mb-8">
          I have completed the Solidity foundation Bootcamp of encode club and
          looking to join another Solidity Bootcamp. Currently, I am learning
          from Alchemy University's Ethereum Bootcamp. I have completed various
          projects on blockchain and smart contracts you can see in my
          portfolio.
        </p>
        <p className="mb-8">
          I have a keen interest in writing smart contracts in optimized ways. I
          have good knowledge of solidity language and other tools used in
          blockchain like Truffle, Hardhat, EtherJS, IPFS. I have a good
          knowledge of developing websites using ReactJs. I can create a
          responsive website using CSS and TailwindCSS. I know about state
          management in react using Redux. I also know the usage of react-hooks
          and react-routers.
        </p>
        {/* <Link href="/aboutme">
          <div className="flex uppercase items-center text-[#5651e5] underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
            Learn more
          </div>
        </Link> */}
      </section>
    </main>
  );
};

export default About;
