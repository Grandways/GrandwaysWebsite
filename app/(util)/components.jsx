"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[64px] w-full px-[135px] flex justify-between items-center relative z-50 max-md:px-[16px] max-md:justify-center">
      <Link href={"/"} className="max-md:hidden">
        <Image
          src="/assets/logo.png"
          alt="Grandways Logo"
          width={224}
          height={50}
          className="cursor-pointer max-md:hidden"
        />
      </Link>
      <div className="hidden md:flex gap-[20px]">
        <Link href={"/"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            Home
          </p>
        </Link>
        <Link href={"/about"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            About
          </p>
        </Link>
        <Link href={"/services"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            Services
          </p>
        </Link>
        {/* <Link href={"/portfolio"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            Portfolio
          </p>
        </Link> */}
        <Link href={"/get-a-quote"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            Get Quoted
          </p>
        </Link>
        <Link href={"/contact"}>
          <p className="text-[16px] cursor-pointer nav-element text-[#E10617] uppercase">
            Contact
          </p>
        </Link>
      </div>

      <div className="md:hidden z-50 pl-[300px]">
        <button onClick={toggleMenu} className="text-black">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F8F9F9] flex flex-col items-center justify-center z-40">
          <a href="/">
            <Image
              src="/assets/logo.png"
              alt="Grandways Logo"
              width={224}
              height={50}
              className="cursor-pointer pb-[75px]"
            />
          </a>

          <Link
            href={"/"}
            onClick={toggleMenu}
            className="text-[#E10617] font-bold text-2xl mb-6 uppercase"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            onClick={toggleMenu}
            className="text-[#E10617] font-bold text-2xl mb-6 uppercase"
          >
            About
          </Link>
          <Link
            href={"/services"}
            onClick={toggleMenu}
            className="text-[#E10617] font-bold text-2xl mb-6 uppercase"
          >
            Services
          </Link>
          {/* <Link href={"/portfolio"} onClick={toggleMenu} className="text-[#E10617] font-bold text-2xl mb-6 uppercase">
            Portfolio
          </Link> */}
          <Link
            href={"/get-a-quote"}
            onClick={toggleMenu}
            className="text-[#E10617] font-bold text-2xl mb-6 uppercase"
          >
            Get Quoted
          </Link>
          <Link
            href={"/contact"}
            onClick={toggleMenu}
            className="text-[#E10617] font-bold text-2xl mb-6 uppercase"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <div className="px-[135px] py-[25px] w-full h-[300px] flex flex-col justify-center bg-[#f0f0f0] max-md:px-[16px] max-md:h-fit max-md:items-center max-md:gap-[25px]">
      <div className="flex justify-between items-start max-md:flex-col max-md:gap-[25px] max-md:items-center">
        <Link href={"/"}>
          <Image
            src="/assets/logo.png"
            alt="Grandways Logo"
            width={334}
            height={75}
            className="cursor-pointer max-md:w-[250px] max-md:h-[56px] max-md:mb-[25px]"
          />
        </Link>

        <div className="flex gap-[50px] max-md:flex-col max-md:items-center max-md:text-center">
          <div>
            <p className="text-[24px] mb-[25px] max-md:text-[18px] max-md:mb-[15px]">
              Locations
            </p>
            <div>
              <Link
                target="blank"
                rel="noopener"
                href={"https://maps.app.goo.gl/y8FYMbJ2VPHMNC9T6"}
              >
                <p>
                  Gaborone, <span className="font-bold">Botswana</span>
                </p>
              </Link>
              {/* <Link target="blank" rel="noopener" href={""}> */}
              <p>
                Selebi Phikwe, <span className="font-bold">Botswana</span>
              </p>
              {/* </Link> */}
              {/* <Link target="blank" rel="noopener" href={""}> */}
              <p>
                Maseru, <span className="font-bold">Lesotho</span>
              </p>
              {/* </Link> */}
            </div>
          </div>
          <div className="flex flex-col max-md:items-center">
            <p className="text-[24px] mb-[25px] max-md:text-[18px] max-md:mb-[15px]">
              Menu
            </p>
            <div className="flex flex-col gap-[5px] max-md:items-center">
              <Link href={"/"}>
                <p className="cursor-pointer max-md:text-center">Home</p>
              </Link>
              <Link href={"/about"}>
                <p className="cursor-pointer max-md:text-center">About</p>
              </Link>
              <Link href={"/services"}>
                <p className="cursor-pointer max-md:text-center">Services</p>
              </Link>
              <Link href={"/get-a-quote"}>
                <p className="cursor-pointer max-md:text-center">Get a Quote</p>
              </Link>
              <Link href={"/contact"}>
                <p className="cursor-pointer max-md:text-center">Contact</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-md:items-center">
            <p className="text-[24px] mb-[25px] max-md:text-[18px] max-md:mb-[15px]">
              Social
            </p>
            <div className="flex flex-col gap-[10px] max-md:items-center max-md:flex-row">
              <Link
                target="blank"
                rel="noopener"
                href={"https://www.instagram.com/grandwaysbw/"}
              >
                <div className="socials">
                  <FaInstagram className="w-[20px] h-[20px]" />
                </div>
              </Link>
              <Link
                target="blank"
                rel="noopener"
                href={"https://www.facebook.com/grandways.co.bw"}
              >
                <div className="socials">
                  <FaFacebookF className="w-[20px] h-[20px]" />
                </div>
              </Link>
              <Link
                target="blank"
                rel="noopener"
                href={"https://www.linkedin.com/company/grandways-investments"}
              >
                <div className="socials">
                  <FaLinkedinIn className="w-[20px] h-[20px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[25px] max-md:flex-col max-md:gap-[5px]">
        <p className="flex items-center gap-[5px] max-md:text-[16px] max-md:justify-center">
          <FaRegCopyright />
          2024 Grandways
        </p>
        <p className="text-transparent">
          Website by{" "}
          <Link target="blank" rel="noopener" href={"https://searchnomore.dev"}>
            Search No More
          </Link>
        </p>
      </div>
    </div>
  );
}

export function Button() {
  return (
    <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">
      Get Started
    </button>
  );
}
