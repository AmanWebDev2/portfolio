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
function About() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="common-seciton lg:w-[80%]"
      >
        <div className="wrapper">
          <PageHeadline headline="about me" />
          <div className="container mx-auto lg:w-1/2 text-xs sm:text-sm md:text-base">
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
            <div className="wrapper my-14">
              <div className="general-details-wrapper">
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details md:w-[]">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
                <div className="general-details">
                  <div className="detail-icon">
                    <EmployeeIcon styles={{scale:'0.8'}}/>
                  </div>
                  <div className="details">
                    <h3>Employees</h3>
                    <p>2 Heros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
