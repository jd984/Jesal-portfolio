const Skills = () => {
  const allSkills = [
    {
      id: 0,
      title: "Solidity",
    },
    {
      id: 1,
      title: "Hardhat",
    },
    {
      id: 2,
      title: "Truffle",
    },
    {
      id: 4,
      title: "Ether.JS",
    },
    {
      id: 5,
      title: "Chainlink",
    },
    {
      id: 6,
      title: "Alchemy",
    },
    {
      id: 7,
      title: "HTML",
    },

    {
      id: 8,
      title: "CSS",
    },

    {
      id: 9,
      title: "TailwindCSS",
    },
    {
      id: 10,
      title: "Javascript",
    },
    {
      id: 11,
      title: "ReactJS",
    },
    {
      id: 12,
      title: "Redux",
    },
    {
      id: 13,
      title: "NodeJS",
    },
    {
      id: 14,
      title: "ExpressJs",
    },
    {
      id: 15,
      title: "Git",
    },
    {
      id: 16,
      title: "Github",
    },
  ];
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h3 className="text-2xl text-[#5651e5] uppercase md:text-3xl mb-8 border-b border-b-slate-200 w-fit">
          Skills
        </h3>
        <div className="grid lg:grid-cols-4 gap-8 mt-12">
          {allSkills.map(({ id, title }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300"
            >
              <h3 className="text-xl text-gray-600 font-light uppercase border-[#5651e5] border-b-2">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
