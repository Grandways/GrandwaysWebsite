import Image from "next/image"
import Link from "next/link"
import logo from "@/public/assets/logo.png"
import { FaRegCopyright } from "react-icons/fa";

export function Navbar(){
    return(
        <div className="h-[64px] w-full px-[135px] flex justify-between items-center">
          <Image src={logo} alt="Grandways Logo" width={224} height={50} className="cursor-pointer" />
          <div className="flex gap-[20px]">
            <p className="cursor-pointer text-[#E10617] uppercase">About</p>
            <p className="cursor-pointer text-[#E10617] uppercase">Services</p>
            <p className="cursor-pointer text-[#E10617] uppercase">Brands</p>
            <p className="cursor-pointer text-[#E10617] uppercase">Contact</p>
          </div>
        </div>
    )
}

export function Footer(){
    return(
        <div className="px-[135px] py-[25px] w-full h-[300px] flex flex-col justify-center gap-[] bg-[#F8F9F9]">
            <div className="flex justify-between items-start">
                <Image src={logo} alt="Grandways Logo" width={334} height={75} className="cursor-pointer" />
                <div className="flex gap-[50px]">
                    <div className="flex flex-col">
                        <p className="text-[24px] mb-[25px]">Menu</p>
                        <div className="flex flex-col gap-[10px]">
                            <p className="cursor-pointer">Home</p>
                            <p className="cursor-pointer">About</p>
                            <p className="cursor-pointer">Services</p>
                            <p className="cursor-pointer">Contact</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[24px] mb-[25px]">Social</p>
                        <div className="flex flex-col gap-[10px]">
                            <p className="cursor-pointer">Instagram</p>
                            <p className="cursor-pointer">Facebook</p>
                            <p className="cursor-pointer">X</p>
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