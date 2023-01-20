import React from "react";
import { ToolboxIcon } from "../configs/icons";
import { devIcons } from "../configs/dev-icons";
import DevIcons from "../components/DevIcons";

const Skills = () => {
  return (
    <main id="skills" className="w-full py-24">
      <section className="max-w-[1240px] w-full h-full mt-36 mx-auto p-2 justify-center items-center">
        <span className="flex items-center mb-8">
          <div className="bg-back-subtle text-[#5651e5] p-2 mr-4 rounded-full">
            <ToolboxIcon />
          </div>
          <h4 className="text-xl uppercase text-[#5651e5] font-semibold">
            Toolbox
          </h4>
        </span>
        <ul className="grid grid-cols-2 sm:grid-cols-4 pl-6 gap-6">
          {devIcons.map((icon) => (
            <DevIcons
              name={icon.name}
              iconName={icon.iconName}
              key={icon.name}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Skills;
