import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/logo.png"
import { FaRegCopyright } from "react-icons/fa";

export function Navbar(){
    return(
        <div className="h-[64px] w-full px-[135px] flex justify-between items-center relative z-50">
            <Link href={"/"}>
                <Image src={logo} alt="Grandways Logo" width={224} height={50} className="cursor-pointer" />
            </Link>
          <div className="flex gap-[20px]">
            <Link href={"/"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase">Home</p>
            </Link>
            <Link href={"/about"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase">About</p>
            </Link>
            <Link href={"/services"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase">Services</p>
            </Link>
            <Link href={"/contact"}>
                <p className="cursor-pointer nav-element text-[#E10617] uppercase">Contact</p>
            </Link>
          </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="px-[135px] py-[25px] w-full h-[300px] flex flex-col justify-center gap-[] bg-[#F8F9F9]">
            <div className="flex justify-between items-start">
                <Link href={"/"}>
                    <Image src={logo} alt="Grandways Logo" width={334} height={75} className="cursor-pointer" />
                </Link>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col">
                        <p className="text-[24px] mb-[25px]">Menu</p>
                        <div className="flex flex-col gap-[5px]">
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
                    <div className="flex flex-col">
                        <p className="text-[24px] mb-[25px]">Social</p>
                        <div className="flex flex-col gap-[5px]">
                            <Link target="blank" rel="noopener" href={"https://www.instagram.com/grandwaysbw/"}>
                                <p className="cursor-pointer">Instagram</p>
                            </Link>
                            <Link target="blank" rel="noopener" href={"https://www.facebook.com/grandways.co.bw"}>
                                <p className="cursor-pointer">Facebook</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="flex items-center gap-[5px]"><FaRegCopyright />2024 Grandways</p>
        </div>
    )
}

export function Button(){
    return(
        <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
    )
}