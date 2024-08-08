"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Marvel Quiz",
    description: "A simple MCU Quiz developed using React & TailwindCSS. A lot of focus was put towards the settings bar.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deathwolf772X/marvel-quiz",
    previewUrl: "https://marvel-quiz-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Amazon Price Tracker",
    description: "A useful project developed with Python and MySQL, the price tracker sends me an email whenever a tracker product drops in price.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/Deathwolf772X/AmazonPriceTracker",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Snake in Python",
    description: "A simply snake game utilizing Python and the Pygame module, it utilizes a simply score & high score system.",
    image: "/images/projects/3.png",
    tag: ["All",],
    gitUrl: "https://github.com/Deathwolf772X/pysnake",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pending Project",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pending Project",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pending Project",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
<section id="projects">
  <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
    My Projects
  </h2>
  <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
    <ProjectTag
      onClick={handleTagChange}
      name="All"
      isSelected={tag === "All"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Web"
      isSelected={tag === "Web"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Mobile"
      isSelected={tag === "Mobile"}
    />
  </div>
  <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project, index) => (
      <motion.li
        key={index}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: index * 0.4 }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          tags={project.tag}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      </motion.li>
    ))}
  </ul>
</section>

  );
};

export default ProjectsSection;