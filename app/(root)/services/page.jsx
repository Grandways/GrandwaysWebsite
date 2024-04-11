import { FaRegLightbulb, FaRegIdCard } from "react-icons/fa";
import { RiOrganizationChart } from "react-icons/ri";
import { PiBroadcastFill } from "react-icons/pi";
import { IoMegaphoneSharp } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { MdTablet } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import serLeft from "@/public/assets/ser-left.png"
import serRight from "@/public/assets/ser-right.png"

const Services = () => {
  return (
    <>
      <div>
        <div className="w-full h-[700px] bg-[#f0f0f0] px-[135px] flex max-md:px-[16px]">
          <div className="flex flex-col w-1/2 justify-center max-md:w-full max-md:items-center max-md:gap-[25px]">
            <h1 className="mb-[15px] max-md:text-[54px] max-md:text-center">How We<br/>Can Help</h1>
            <p className="w-[470px] mb-[25px] max-md:text-[16px] max-md:text-center max-md:w-[300px]">Elevate your brand with our expertise. Explore tailored marketing and advertising solutions for success. Unlock your business' potential with our services.</p>
            <Link href={"/contact"}>
                <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>
            </Link>
          </div>
          <div className="flex flex-col justify-center relative bottom-[10%] max-md:hidden">
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] relative">
                <Image src={serLeft} alt="" width={400} height={250} className="" />
            </div>
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] heroimg absolute z-1 top-[50%] left-[50%]">
                <Image src={serRight} alt="" width={400} height={250} className="" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-[135px] py-[50px] gap-[50px]">
            <h2 className="text-center max-md:text-[36px]">How Do You Benefit?</h2>
            <div className="flex flex-col gap-[35px]">
                <p className="w-[700px] text-center max-md:text-[16px] max-md:w-[300px]">Discover the advantages of partnering with our marketing and advertising agency. By leveraging our expertise, you gain access to strategic insights and innovative solutions tailored to your brand's unique needs. From targeted campaigns to cutting-edge techniques, we're dedicated to maximizing your ROI and driving sustainable growth.</p>
                
                <p className="w-[700px] text-center max-md:text-[16px] max-md:w-[300px]">Experience the difference of working with a team committed to your success. With our collaborative approach, transparent communication, and data-driven strategies, we ensure that every initiative is aligned with your goals. Whether you're looking to increase brand awareness, drive conversions, or expand your market reach, we're here to empower your business and exceed your expectations.</p>
            </div>
            <Link href={"/contact"}>
                <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
            </Link>
        </div>

        <div className="w-full flex flex-col bg-[#f0f0f0] gap-[50px] px-[135px] py-[50px]">
            <h2 className="text-center max-md:text-[36px]">What We Offer</h2>
            <div className="flex flex-col items-center gap-[25px]">
                <div className="flex gap-[25px] max-md:flex-col">
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <FaRegLightbulb className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Strategy Development</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Marketing Strategy<br/>
                                - Public Relations & Communication Strategy<br/>
                                - Management & Strategy<br/>
                                - Product/Program Launch<br/>
                                - Strategy
                            </p>
                        </div>
                    </div>
                    
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <RiOrganizationChart className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Event Management & Coordination</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Press Conferences<br/>
                                - Dinners<br/>
                                - Awards<br/>
                                - Seminars/Workshops<br/>
                                - Corporate Xmas Parties
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-[25px] max-md:flex-col">
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <PiBroadcastFill className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Media Management & Coordination</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Media Buying<br/>
                                - Media Planning<br/>
                                - Press Statements<br/>
                                - Press Release
                            </p>
                        </div>
                    </div>
                    
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <IoMegaphoneSharp className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Publications Design & Printing</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Annual reports<br/>
                                - Newsletter & Brochures<br/>
                                - Flyers<br/>
                                - Magazines<br/>
                                - Product Packaging Design
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-[25px] max-md:flex-col">
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <FaRegIdCard className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Brand Identity</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Corporate & Promotional Merchandise Branding<br/>
                                - Indoor & Outdoor Branding<br/>
                                - Company Profile<br/>
                                - Business Cards <br/>
                                - Letterhead
                            </p>
                        </div>
                    </div>
                    
                    <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                        <TbWorldCode className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px] max-md:text-[18px]">Website</p>
                            <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                                - Web Design<br/>
                                - Web Development<br/>
                                - Website Management<br/>
                                - Unlimited Business Emails
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                    <MdTablet className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[24px] max-md:text-[18px]">Digital Media</p>
                        <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                            - Social Media Marketing<br/>
                            - Search Engine Marketing<br/>
                            - Content Generation & Optimisation<br/>
                            - Quality Link Building<br/>
                            - Integrated Online Marketing Strategies
                        </p>
                    </div>
                </div>

                <Link href={"/contact"}>
                    <button className="w-[150px] h-[50px] mt-[25px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
                </Link>
            </div>
        </div>

        <div className="flex flex-col items-center px-[135px] py-[50px]">
            <h2 className="text-center mb-[50px] max-md:text-[36px]">Get In Touch</h2>
            <p className="w-[700px] text-center mb-[25px] max-md:text-[16px] max-md:w-[300px]">Ready to elevate your marketing efforts? Get in touch with us today for tailored strategies that drive results. Let's collaborate and propel your brand forward together.</p>
            <Link href={"/contact"}>
                <button className="w-[150px] h-[50px] mt-[25px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get In Touch</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Services
