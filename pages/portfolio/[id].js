import image1 from "../../assetss/image-1.png";
import image2 from "../../assetss/image-2.png";
import image3 from "../../assetss/image-3.png";
import image4 from "../../assetss/image-4.png";
import image5 from "../../assetss/image-5.png";
import { FaGithub } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    title: "NFT Marketplace",
    imageSrc: image1,
    url: "nft-marketplace",
    adUrl: "https://github.com/jd984/nft-marketplace",
    description:
      "In this project, I build the NFT-Marketplace on which users can buy, sell and upload their own NFTs. I write smart contracts using Solidity language and uploaded all NFTs on PINATA, an IPFS platform. I use Hardhat to deploy my contract. In the frontend interface, I use ReactJs. In these projects, I learned how to write smart contracts, deploy web3 applications, and use of testnets and faucets for your projects.",
  },
  {
    id: 2,
    title: "Voting Dapp",
    imageSrc: image2,
    url: "voting-dapp",
    adUrl: "https://github.com/jd984/voting-dapp",
    description:
      "In this project, I build a decentralized voting system in which users can create voters, they can vote for each other, and get the results. I write smart contracts using Solidity language and I use Hardhat to deploy my contract. For the frontend interface, I use ReactJs and React hooks. In these projects, I learn how to write smart contracts for decentralized applications and how to connect smart contracts to  frontend applications",
  },
  {
    id: 3,
    title: "Github RepoFInder",
    imageSrc: image3,
    url: "github-repofinder",
    adUrl: "https://github-repo-finder.vercel.app/",
    description:
      "In this project, I build the Github-RepoFinder that will find the Github Repositories of the users. I learn how to fetch data from the third-party APIs, usage of Axios in react, and style using TailwindCSS and DaisyUI. Advanced hooks like useRef and useMemo are used in building this project.",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    imageSrc: image4,
    url: "personal-portfolio",
    adUrl: "https://jesal-portfolio.vercel.app/",
    description:
      "In this project, I build a personal portfolio website that shows my skills. I build this website using Reactjs and NextJS. For style, TailwindCSS, react-icons and other libraries are used. Hooks, Router and Axios are used for building this website.",
  },
  {
    id: 5,
    title: "React Feedback UI",
    imageSrc: image5,
    url: "react-feedback",
    adUrl: "https://feedback-two-livid.vercel.app/",
    description:
      "In this project, I build the FeedBack-UI that will take feedback from the user with some rating on it and set the ratings accordingly. We use basic reactjs hooks to get input from the user, css for styling, and different functions to get the correct review ratings.",
  },
];

const getPortfolioFrom = (url) => projectData.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = projectData.map((p) => ({
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

const SinglePortfolio = ({
  portfolio: { title, imageSrc, description, adUrl },
}) => {
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
          <Image src={imageSrc} alt="bla" className="rounded-lg" />
        </div>

        <h2 className="text-center text-gray-700 md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p className="text-start">{description}</p>

        <div className="flex items-center justify-center gap-10">
          <Link target="_blank" href={adUrl}>
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
