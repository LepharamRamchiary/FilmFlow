import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-24 px-2 bg-black bg-opacity-80">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 grid-cols-1">
        <div className="flex flex-col p-4 gap-3">
          <div className="mb-2 flex ">
            <div className="text-white text-lg">
              <p>
                <FaHome />
                Gogamukh, Dhemaji
              </p>
              <p>Assam</p>
            </div>
          </div>
          <div className="text-white text-lg">
            <FaPhone />
            +91-9101318307
          </div>
          <div className="text-white text-lg">
            <a href="mailto:lepharamchiary@gmail.com">
              <MdAttachEmail />
              lepharamchiary@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <h4 className="text-white text-lg pb-4">About Me</h4>
          <p className="text-white text-lg">
            LEPHARAM RAMCHIARY, a passionate web developer fresher, adept in
            HTML, CSS, and JavaScript, eager to craft innovative, user-friendly
            interfaces.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.linkedin.com/in/lepharam-ramchiary-576282215/"
              className="text-white text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/LepharamRamchiary"
              className="text-white text-4xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
