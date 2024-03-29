import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LocationSvg from "../assets/SVG/LocationSvg";
import PhoneSvg from "../assets/SVG/PhoneSvg";
import LinkedInSvg from "../assets/SVG/LinkedInSvg";
import InstaSvg from "../assets/SVG/InstaSvg";
import MailSvg from "../assets/SVG/MailSvg";
import PageHeadline from "./PageHeadline";
import Loader from "./Loader";
function Contact() {
  return (
    <>
      <section className="common-seciton lg:w-[80%] text-xs sm:text-sm md:text-base">
        <div className="wrapper translate-y-[-85px]">
          <PageHeadline headline="contact us" />
          <div className="container">
            {/* <Loader/> */}
            <div className="mt-6 mb-3">
              <div className="">
                <div className="sub-title">
                  <h6 className="text-center contact__title">
                    Wanna discuss? let's talk and keep in touch..!
                  </h6>
                </div>
              </div>
            </div>
            <div className="">
              <div className="envolpe"></div>
              <div className="info">
                <div className="wrapper px-24">
                  <div className="flex flex-col sm:flex-row wrapper">
                    <div className="flex items-center sm:w-52 space-x-2">
                      <div className="-icon">
                        <LocationSvg styles={{ fill: "#d85c36" }} />
                      </div>
                      <p>India</p>
                    </div>
                    <div className="flex items-center sm:w-52 space-x-2">
                      <div className="-icon">
                        <PhoneSvg styles={{ fill: "#d85c36" }} />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value="9458163496"
                        className="bg-transparent cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row wrapper">
                    <div className="flex items-center sm:w-52  space-x-2">
                      <div className="-icon">
                        <LinkedInSvg styles={{ fill: "#d85c36" }} />
                      </div>
                      <p>
                        <a
                          href="https://www.linkedin.com/in/aman-kumar-355347216/"
                          target="_blank"
                        >
                          Aman
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center sm:w-52 space-x-2">
                      <div className="-icon">
                        <InstaSvg styles={{ fill: "#d85c36" }} />
                      </div>
                      <p>
                        <a
                          href="https://www.instagram.com/_aman.dev/"
                          target="_blank"
                        >
                          aman_dev
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col wrapper">
                    <div className="flex items-center justify-center sm:w-52 sm:mx-auto sm:pr-8 space-x-2">
                      <div className="-icon">
                        <MailSvg styles={{ fill: "#d85c36" }} />
                      </div>
                      <p>
                        <a href="mailto:webdevaman2@gmail.com">
                          webdevaman2@gmail.com
                        </a>
                      </p>
                    </div>
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

export default Contact;
