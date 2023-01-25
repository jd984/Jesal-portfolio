import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
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
  return {
    props: { projectData },
  };
};

const PortfolioAll = ({ projectData }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h3 className="text-2xl text-[#5651e5] uppercase md:text-3xl mb-8 border-b border-b-slate-200 w-fit">
          Projects
        </h3>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projectData.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioAll;
