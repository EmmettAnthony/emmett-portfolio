import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {

    const links= [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: "https://linkedin.com/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}></FaGithub>
                </>
                
            ),
            href: "https://github.com/emmettanthony",
            style: "rounded-tr-md",
        },
        {
          id: 3,
          child: (
              <>
                 Messenger <FaFacebookMessenger size={30}></FaFacebookMessenger>
              </>
          ),
          href: "https://messenger.facebook.com",
          style: "rounded-br-md",
      },
      {
        id: 4,
        child: (
            <>
                Facebook <FaFacebook size={30}></FaFacebook>
            </>
        ),
        href: "https://facebook.com/emmettanthony",
        style: "rounded-br-md",
      },
      {
        id: 5,
        child: (
            <>
                WhatsApp <FaWhatsapp size={30}></FaWhatsapp>
            </>
        ),
        href: "https://whatsapp.com/0775623283",
        style: "rounded-br-md",
      },
      {
        id: 6,
        child: (
            <>
               Mail <HiOutlineMail size={30}></HiOutlineMail>
            </>
            
        ),
        href: "mailto:emmettanthony998@gmail.com",
      },
    {
      id: 7,
      child: (
          <>
              Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
          </>
      ),
      href: "./resume.docx",
      style: "rounded-br-md",
      download: true,
    },
  ];


  return (
   <div className="hidden lg:flex flex-col top-[35%] left-0 fixed mb-24">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;