import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main id="about" className="w-full py-24">
      <section className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <h3 className="text-2xl text-[#5651e5] uppercase md:text-3xl mb-8 border-b border-b-slate-200 w-fit">
          About Me
        </h3>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          asperiores reiciendis obcaecati iusto cum tenetur. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Voluptates culpa tempore unde
          fugit rerum laudantium?
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptates praesentium esse repellat, quae, eum quos rerum recusandae
          amet, mollitia possimus error expedita id suscipit! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Temporibus deleniti nostrum
          dicta voluptatum molestiae inventore numquam cumque placeat amet vel
          sed sequi minus nisi atque corporis, rerum sunt consequatur ex!
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptates praesentium esse repellat, quae, eum quos rerum recusandae
          amet, mollitia possimus error expedita id suscipit! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Error amet quisquam nostrum
          blanditiis, incidunt voluptas numquam, dolorem distinctio id
          repudiandae veritatis, atque recusandae impedit! Officia explicabo
          alias aut quasi repellendus!
        </p>
        <Link href="/aboutme">
          <div className="flex uppercase items-center text-[#5651e5] underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
            Learn more
          </div>
        </Link>
      </section>
    </main>
  );
};

export default About;
