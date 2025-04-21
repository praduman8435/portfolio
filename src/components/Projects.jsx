import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Hover2 from "./Hover2";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".overlay", {
      opacity: 1,
      width: "100%",
      duration: 1,
      stagger: 0.2,
    }).from(".project-item", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  });

  // Project Data Array
  const projects = [
    {
      number: "01",
      title: "Capstone-Mega-DevOps-Project",
      to: "https://github.com/praduman8435/Capstone-Mega-DevOps-Project",
      info: "Robust DevSecOps mega implementation featuring Nexus, SonarQube, Docker, and Jenkins for CI/CD of a Spring Boot microservice on AWS EKS.",
    },
    {
      number: "02",
      title: "Production-ready-EKS-with-automation",
      to: "https://github.com/praduman8435/Production-ready-EKS-with-automation",
      info: "A fully automated, scalable, and cost-optimized AWS EKS cluster using Terraform & Github Actions for seamless CI/CD.",
    },
    {
      number: "03",
      title: "DevSecOps-in-Action",
      to: "https://github.com/praduman8435/DevSecOps-in-Action",
      info: "The Ultimate DevSecOps Project: Learn how to integrate security, automation, and observability in Kubernetes with AWS, ArgoCD & Prometheus!",
    },
    {
      number: "04",
      title: "go-web-app",
      to: "https://github.com/praduman8435/portfolio",
      info: "Automated end-to-end DevOps pipeline for a Go web application using Kubernetes, Helm, ArgoCD, and GitHub Actions. Ensures seamless CI/CD with containerized deployments and infrastructure as code.",
    },
    {
      number: "05",
      title: "Boardgame",
      to: "https://github.com/praduman8435/Boardgame",
      info: "A fully automated corporate-grade CI/CD pipeline with DevSecOps integration. Features Jenkins-based automation, SonarQube & Trivy security scans, Nexus artifact management, Dockerized deployments to Kubernetes, and real-time monitoring with Prometheus & Grafana. Ensuring zero manual intervention, enterprise security, and seamless scalability.",
    },
  ];

  return (
    <div
      className="md:flex flex-col relative overflow-hidden mx-[5vw] md:mx-[10vw] mt-[1vw] pb-28"
      id="projects"
    >
      <h1 className="text-[10vw] project relative y">
        Projects
        <span className="overlay absolute opacity-90 top-0 left-0 bg-[#000] w-0 h-full z-10"></span>
      </h1>

      <section className="w-full mt-4">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <Hover2 number={project.number} to={project.to} info={project.info}>
              {project.title}
            </Hover2>
            {index < projects.length - 1 && (
              <div className="w-full h-[1px] my-3 bg-white"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
