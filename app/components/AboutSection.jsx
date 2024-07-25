"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node.JS</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>Bexleyheath Academy</li>
                <li>JustIT Software Development Bootcamp</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content:(
            <ul className="list-disc pl-2">
                <li>xx</li>
                <li>xx</li>
            </ul>
        )
    }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack web developer passionate about interactive and
            responsive web design. I have experience working with Javascript,
            React, NodeJS, HTML, CSS, Tailwind, and Git. I am a quick learner
            constantly on the search to expand my skillset and knowledge
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
