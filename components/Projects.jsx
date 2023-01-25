import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import Link from "next/link";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "React Feedback UI",
      imageSrc: image1,
      url: "react-feedback",
    },
    {
      id: 2,
      title: "Github RepoFInder",
      imageSrc: image2,
      url: "github-repofinder",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      imageSrc: image3,
      url: "personal-portfolio",
    },
  ];

  return (
    <div id="projects" className="w-full pt-28">
      <div className="max-w-screen-xl py-24 mx-auto px-8 text-center md:text-left">
        <h3 className="text-2xl text-[#5651e5] uppercase md:text-3xl mb-8 border-b border-b-slate-200 w-fit">
          Projects
        </h3>
        <div className="max-w-5xl py-12 mx-auto grid md:grid-cols-2 gap-8">
          {projectData.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-lg duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-[#5651e5] bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500 text-white px-6 py-3 font-bold uppercase tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
