import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InstaSvg from "../assets/SVG/InstaSvg";
import ReactSvg from "../assets/tech-icons/ReactSvg";
import MailSvg from "../assets/SVG/MailSvg";
import PhoneSvg from "../assets/SVG/PhoneSvg";
import LocationSvg from "../assets/SVG/LocationSvg";
import PageHeadline from "./PageHeadline";
import LinkedInSvg from "../assets/SVG/LinkedInSvg";
import EmployeeIcon from "../assets/SVG/EmployeeIcon";
import ReactImg from "../assets/react.svg";
import NodeImg from "../assets/tech-icons/node-js.svg";
import CodeSvg from "../assets/SVG/CodeSvg";
import StarSvg from "../assets/SVG/StarSvg";
import CalendarSvg from "../assets/SVG/CalendarSvg";
import MongoDb from "../assets/tech-icons/MongoDbSvg";
import Sqlite from "../assets/tech-icons/Sqlite";
import NodeJs from "../assets/tech-icons/NodeJs";
import { SpringBootSvg } from "../assets/tech-icons/SpringBootSvg";
import Tailwind from "../assets/tech-icons/Tailwind";
import Card from "./Card";
import NodeSvg from "../assets/tech-icons/NodeSvg";

const aboutMe = [
  {
    icon: <EmployeeIcon styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Employee",
    para: "1",
  },
  {
    icon: <StarSvg styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Active Projects",
    para: "1 project",
  },
  {
    icon: <MailSvg styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Email",
    para: "webdevaman2@gmail.com",
  },
  {
    icon: <PhoneSvg styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Phone",
    para: "+91 9458163496",
  },
  {
    icon: <LocationSvg styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Location",
    para: "Dehradun,India",
  },
  {
    icon: <CalendarSvg styles={{ scale: "0.8", color: "#d85c36" }} />,
    title: "Since",
    para: "2020",
  },
];

const technologies = [
  {
    icon: <ReactSvg styles={{ scale: "0.8", color: "#d85c36", width:"50px",height:"50px" }} />,
    para: "React js",
  },
  {
    icon: <NodeSvg styles={{ scale: "0.8", color: "#d85c36",width: "50px",height:"50px"}} />,
    para: "Express Js",
  },
  {
    icon: <MongoDb styles={{ scale: "0.8", width: "50px",height:"50px"}} />,
    para: "MongoDb",
  },
  {
    icon: <Sqlite styles={{ scale: "0.8", width: "50px",height:"50px"}} />,
    para: "MySQL",
  },
  {
    icon: <SpringBootSvg styles={{ scale: "0.8", width: "50px",height:"50px"}} />,
    para: "Spring Boot",
  },
  {
    icon: <Tailwind styles={{ scale: "0.8", width: "50px" }} />,
    para: "Tailwind CSS",
  },  
];

const services = [
  {
    icon: <ReactSvg styles={{ scale: "0.8", color: "#d85c36", width:"50px",height:"50px" }} classes={"md:scale-150"} />,
    title: "Front-end Development",
    para: "Using The World's Latest Technologies Of The Day For Your Product's Client Side, Such As React.Js Or Next.Js "
  },
  {
    icon: <CodeSvg styles={{ scale: "0.8", color: "#d85c36", width:"50px",height:"50px" }} classes={"md:scale-150"} />,
    title: "Back-end Development",
    para:"Using the world's latest technologies of the day for your product's server side, such as Node.Js."
  },
]


function About() {
  return (
    <>
      <section className="common-seciton lg:w-[80%]">
        <div className="wrapper overflow-y-auto overflow-x-hidden">
          <PageHeadline headline="about me" />
          <div className="container mx-auto lg:w-4/5 text-xs sm:text-sm md:text-base">
            <div className="mt-6 mb-3">
              <div className="">
                <div className="sub-title">
                  <p className="about__para about__para-info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis nobis animi maiores, voluptatum, ducimus
                    laudantium nemo, aliquid recusandae placeat similique saepe
                    libero! Culpa ipsam fugiat amet fugit atque officiis ea
                    reprehenderit nesciunt. Excepturi dolor enim dolorum,
                    similique obcaecati maiores quas!
                  </p>
                  <br />
                  <p className="quote about__para ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, illum?
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper mb-28 mt-10">
              <div className="general-details-wrapper">
                {aboutMe.map((me, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Card icon={me.icon} title={me.title} para={me.para} />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            {/* Technologies */}
            <PageHeadline headline="technologies" />
            <div className="wrapper mt-10 mb-28">
              <div className="general-details-wrapper">
                 {
                  technologies.map((tech)=>{
                    return(
                      <>
                      <Card icon={tech.icon} para={tech.para}/>
                      </>
                    )
                  })
                 }
              </div>
            </div>
            {/* Services */}
            <PageHeadline headline="services" />
            <div className="wrapper mt-10 mb-28">
              <div className="service general-details-wrapper">
                {/* <div className="service__detail general-details">
                  <div className="detail-icon">
                    <img src={ReactImg} alt="" srcset="" />
                  </div>
                  <div className="details">
                    <h3 className="font-bold mb-4 about__services">
                      Front-End Development
                    </h3>
                    <p className="about__services">
                      Using the world's latest technologies of the day for your
                      product's client side, such as React.Js or Next.Js
                    </p>
                  </div>
                </div> */}
                 {
                  services.map((service,index)=>{
                    return(
                      <React.Fragment key={index}>
                      <Card
                        icon={service.icon}
                        title={service.title}
                        para={service.para}
                        classes={"service__detail"}
                      />
                      </React.Fragment>
                    )
                  })
                 }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
