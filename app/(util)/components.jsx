import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/logo.png"
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export function Navbar(){
    return(
        <div className="h-[64px] w-full px-[135px] flex justify-between items-center relative z-50 max-md:px-[16px] max-md:justify-center">
            <Link href={"/"} className="max-md:hidden">
                <Image src={logo} alt="Grandways Logo" width={224} height={50} className="cursor-pointer max-md:hidden" />
            </Link>
          <div className="flex gap-[20px]">
            <Link href={"/"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase max-md:text-[16px]">Home</p>
            </Link>
            <Link href={"/about"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase max-md:text-[16px]">About</p>
            </Link>
            <Link href={"/services"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase max-md:text-[16px]">Services</p>
            </Link>
            <Link href={"/contact"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase max-md:text-[16px]">Contact</p>
            </Link>
          </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="px-[135px] py-[25px] w-full h-[300px] flex flex-col justify-center bg-[#f0f0f0] max-md:px-[16px] max-md:h-fit max-md:items-center max-md:gap-[25px]">
            <div className="flex justify-between items-start max-md:flex-col max-md:gap-[25px] max-md:items-center">
                <Link href={"/"}>
                    <Image src={logo} alt="Grandways Logo" width={334} height={75} className="cursor-pointer max-md:w-[250px] max-md:h-[56px]" />
                </Link>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col max-md:items-center">
                        <p className="text-[24px] mb-[25px] max-md:text-[18px] max-md:mb-[15px]">Menu</p>
                        <div className="flex flex-col gap-[5px] max-md:items-center">
                            <Link href={"/"}>
                                <p className="cursor-pointer">Home</p>
                            </Link>
                            <Link href={"/about"}>
                                <p className="cursor-pointer">About</p>
                            </Link>
                            <Link href={"/services"}>
                                <p className="cursor-pointer">Services</p>
                            </Link>
                            <Link href={"/contact"}>
                                <p className="cursor-pointer">Contact</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col max-md:items-center">
                        <p className="text-[24px] mb-[25px] max-md:text-[18px] max-md:mb-[15px]">Social</p>
                        <div className="flex flex-col gap-[10px] max-md:items-center">
                            <Link target="blank" rel="noopener" href={"https://www.instagram.com/grandwaysbw/"}>
                                <div className="socials">
                                    <FaInstagram className="w-[20px] h-[20px]" />
                                </div>
                            </Link>
                            <Link target="blank" rel="noopener" href={"https://www.facebook.com/grandways.co.bw"}>
                                <div className="socials">
                                    <FaFacebookF className="w-[20px] h-[20px]" />
                                </div>
                            </Link>
                            <Link target="blank" rel="noopener" href={"https://www.linkedin.com/company/grandways-investments"}>
                                <div className="socials">
                                    <FaLinkedinIn className="w-[20px] h-[20px]" />
                                </div>
                            </Link>                            
                        </div>
                    </div>
                </div>
            </div>
            <p className="flex items-center gap-[5px] max-md:text-[16px]"><FaRegCopyright />2024 Grandways</p>
        </div>
    )
}

export function Button(){
    return(
        <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
    )
}