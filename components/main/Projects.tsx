import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <a href="https://github.com/FelixOgero" target="_blank" rel="noopener noreferrer">
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/web.jpg"
          title="Web Development"
          description="Passionate web developer with expertise in front-end and back-end technologies. Proven track record of creating responsive, user-friendly websites. Excited about crafting innovative digital solutions to elevate online experiences."
        />
    
        
        <ProjectCard
          src="/mobile.jpg"
          title="Mobile Development"
          description="As a dedicated Flutter mobile developer, I specialize in building cross-platform applications with sleek UI/UX. Proficient in Dart, I bring creativity and efficiency to every project, ensuring optimal performance."
        />
    
       
        <ProjectCard
          src="/data.jpg"
          title="Data Science"
          description="Versatile data scientist skilled in extracting meaningful insights from complex datasets. Proficient in machine learning and statistical analysis, I develop data-driven solutions to solve real-world problems and drive informed decision-making."
        />
     
      </div>
      </a>
      
    </div>
  );
};

export default Projects;
