import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InstaSvg from "../assets/SVG/InstaSvg";
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
                  <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis nobis animi maiores, voluptatum, ducimus
                    laudantium nemo, aliquid recusandae placeat similique saepe
                    libero! Culpa ipsam fugiat amet fugit atque officiis ea
                    reprehenderit nesciunt. Excepturi dolor enim dolorum,
                    similique obcaecati maiores quas!
                  </p>
                  <br />
                  <p className="quote">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint, illum?
                  </p>
                </div>
              </div>
            </div>
            <div className="wrapper mb-28 mt-10">
              <div className="general-details-wrapper">
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{ scale: "0.8",color:'#d85c36' }} />
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details md:w-[]">
                  <div className="detail-icon">
                    <StarSvg styles={{ scale: "0.8",color:'#d85c36' }} />
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Active Projects</h3>
                    <p>1 project</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <MailSvg styles={{ scale: "0.8",color:'#d85c36' }}/>
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="lowercase">webdevaman2@gmail.com</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <PhoneSvg styles={{ scale: "0.8",color:'#d85c36' }} />
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p>+91 9458163496</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <LocationSvg styles={{ scale: "0.8",color:'#d85c36' }} />
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Location</h3>
                    <p>Dehradun,India</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <CalendarSvg styles={{ scale: "0.8",color:'#d85c36' }} />
                  </div>
                  <div className="details">
                    <h3 className="font-medium mb-2">Since</h3>
                    <p>2020</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Technologies */}
            <PageHeadline headline="technologies" />
            <div className="wrapper mt-10 mb-28">
              <div className="general-details-wrapper">
                <div className="general-details">
                  <div className="detail-icon">
                    <img src={ReactImg} alt="" srcset="" />
                  </div>
                  <div className="details">
                    <p>React Js</p>
                  </div>
                </div>
                <div className="general-details md:w-[]">
                  <div className="detail-icon">
                    {/* <EmployeeIcon styles={{scale:'0.8'}}/> */}
                    <img src={NodeImg} alt="" srcset="" />
                    {/* <NodeImg/> */}
                  </div>
                  <div className="details">
                    <p>Express Js</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{ scale: "0.8" }} />
                  </div>
                  <div className="details">
                    <p>MongoDb</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{ scale: "0.8" }} />
                  </div>
                  <div className="details">
                    <p>MySQL</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{ scale: "0.8" }} />
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{ scale: "0.8" }} />
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Services */}
            <PageHeadline headline="services" />
            <div className="wrapper mt-10 mb-28">
              <div className="service general-details-wrapper">
                <div className="general-details h-[170px] md:h-[210px]">
                  <div className="detail-icon">
                    <img src={ReactImg} alt="" srcset="" />
                  </div>
                  <div className="details">
                    <h3 className="font-bold mb-4">Front-End Development</h3>
                    <p>
                      Using the world's latest technologies of the day for your
                      product's client side, such as React.Js or Next.Js
                    </p>
                  </div>
                </div>
                <div className="general-details h-[170px] md:h-[210px]">
                  <div className="detail-icon">
                    <CodeSvg/>
                  </div>
                  <div className="details">
                    <h3 className="font-bold mb-4">Back-End Development</h3>
                    <p>
                      Using the world's latest technologies of the day for your
                      product's server side, such as Node.Js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
