import HTML5 from "@/assets/img/HTML5.svg";
import CSS3 from "@/assets/img/CSS3.svg";
import Bootstrap from "@/assets/img/Bootstrap.svg";
import React from "@/assets/img/React.svg";
import Jest from "@/assets/img/Jest.svg";
import Figma from "@/assets/img/Figma.svg";
import jQuery from "@/assets/img/jQuery.svg";
import nginx from "@/assets/img/NGINX.svg";
import webpack from "@/assets/img/Webpack.svg";
import tailwind from "@/assets/img/Tailwind CSS.svg";
import Go from "@/assets/img/Go.svg";
import Git from "@/assets/img/Git.svg";
import GithubAction from "@/assets/img/GitHub Actions.svg";
import NodeJS from "@/assets/img/Node.js.svg";
import Typescript from "@/assets/img/TypeScript.svg";
import Redis from "@/assets/img/Redis.svg";
import Postman from "@/assets/img/Postman.svg";
import Kafka from "@/assets/img/Kafka.svg";
import Docker from "@/assets/img/Docker.svg";
import AWS from "@/assets/img/AWS.svg";
import k8s from "@/assets/img/Kubernetes.svg";
import MongoDB from "@/assets/img/MongoDB.svg";
import PostgreSQL from "@/assets/img/PostgresSQL.svg";
import Splunk from "@/assets/img/Splunk.svg";
import Jenkins from "@/assets/img/Jenkins.svg";
import npm from "@/assets/img/NPM.svg";
import Express from "@/assets/img/Express.svg";
import GraphQL from "@/assets/img/GraphQL.svg";
import Yarn from "@/assets/img/Yarn.svg";

const frontend = [
  {
    name: "HTML5",
    src: HTML5,
  },
  {
    name: "CSS3",
    src: CSS3,
  },
  {
    name: "Bootstrap",
    src: Bootstrap,
  },
  {
    name: "jQuery",
    src: jQuery,
  },
  {
    name: "React",
    src: React,
  },
  {
    name: "Tailwind",
    src: tailwind,
  },
  {
    name: "Jest",
    src: Jest,
  },
  {
    name: "Figma",
    src: Figma,
  },
  {
    name: "nginx",
    src: nginx,
  },
  {
    name: "webpack",
    src: webpack,
  },
];

const backend = [
  {
    name: "NodeJS",
    src: NodeJS,
  },
  {
    name: "Typescript",
    src: Typescript,
  },
  {
    name: "Express",
    src: Express,
  },
  {
    name: "npm",
    src: npm,
  },
  {
    name: "yarn",
    src: Yarn,
  },
  {
    name: "GraphQL",
    src: GraphQL,
  },
  {
    name: "Go",
    src: Go,
  },
  {
    name: "Postman",
    src: Postman,
  },
  {
    name: "Git",
    src: Git,
  },
  {
    name: "Github Actions",
    src: GithubAction,
  },
  {
    name: "Jenkins",
    src: Jenkins,
  },
  {
    name: "Redis",
    src: Redis,
  },
  {
    name: "MongoDB",
    src: MongoDB,
  },
  {
    name: "PostgreSQL",
    src: PostgreSQL,
  },
  {
    name: "AWS",
    src: AWS,
  },
  {
    name: "Docker",
    src: Docker,
  },
  {
    name: "Kubernetes",
    src: k8s,
  },
  {
    name: "Splunk",
    src: Splunk,
  },
  {
    name: "Kafka",
    src: Kafka,
  },
];

export default function SkillsPage() {
  return (
    <div className="gap-10">
      <section className="mb-10">
        <h1 className="text-cyan-500 font-bold sm:text-3xl md:text-4xl">
          Skills & Tools
        </h1>
        <h1 className="text-gray-500 mt-2 sm: text-3xl md:text-4xl font-bold">
          Without skills and tools, life will be difficult!
        </h1>

        <p className="mt-6 text-white sm:text-2xl">
          During the journey of working, I have chances to work with some tools and training with skills
        </p>

        <div className="flex mt-4 flex-wrap justify-center">
          {frontend.map((item) => {
            return (
              <div key={item.name} className="mr-2 mt-2 bg-white py-2 w-[120] h-[75] flex gap-2 rounded-lg justify-center flex-wrap content-center">
                <img src={item.src.src} className="w-[25] h-[25]"></img>
                {item.name}
              </div>
            );
          })}
        </div>

        <div className="flex mt-4 flex-wrap justify-center">
          {backend.map((item) => {
            return (
              <div key={item.name} className="mr-2 mt-2 bg-white py-2 w-[120] h-[75] flex gap-2 rounded-lg justify-center flex-wrap content-center">
                <img src={item.src.src} className="w-[25] h-[25]"></img>
                {item.name}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
