import React from "react";
import { AiOutlineInstagram,AiFillTwitterCircle,AiFillLinkedin,AiFillMail } from "react-icons/ai";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://twitter.com/PiyushV78107699" className="text-white text-base text-center mx-2 cursor-pointer">Contact Me</a>
        <a href="https://piyushvermaco.github.io/CSS-My-Site/" className="text-white text-base text-center mx-2 cursor-pointer">About Me</a>
        <a href="https://deviraiva.blogspot.com/" className="text-white text-base text-center mx-2 cursor-pointer">Blog</a>
        <a href="https://polar-fortress-35897.herokuapp.com/" className="text-white text-base text-center mx-2 cursor-pointer">Newsletter</a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Made With Love For Fun</p>
      <p className="text-white text-sm text-center font-medium mt-2">By Dev Iraiva</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="space-x-10 flex justify-between items-center mt-3">
        <a className="text-white mx-0 justify-center items-center" href="https://twitter.com/PiyushV78107699"><AiFillTwitterCircle/></a>
        <a className="text-white mx-0  justify-center items-center" href="https://www.instagram.com/dev_iraiva/"><AiOutlineInstagram/></a>
        <a className="text-white mx-0 justify-center items-center" href="https://www.linkedin.com/in/piyush-verma-7a2510203/"><AiFillLinkedin/></a>
        <a className="text-white mx-0  justify-center items-center " href="mailto:piyushvermaco@gmail.com"><AiFillMail/></a>
    </div>
  </div>
);

export default Footer;
