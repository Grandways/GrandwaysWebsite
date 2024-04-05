import { FaRegLightbulb, FaRegIdCard } from "react-icons/fa";
import { RiOrganizationChart } from "react-icons/ri";
import { PiBroadcastFill } from "react-icons/pi";
import { IoMegaphoneSharp } from "react-icons/io5";
import { TbWorldCode } from "react-icons/tb";
import { MdTablet } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div>
        <div className="w-full h-[700px] bg-[#F8F9F9] px-[135px] flex">
          <div className="flex flex-col w-1/2 justify-center">
            <h1 className="mb-[15px]">How We<br/>Can Help</h1>
            <p className="w-[470px] mb-[25px]">The Grandways Team consists of a group of resourceful, noble individuals who are humble, highly experienced and hard working.</p>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>
          </div>
          <div className="flex flex-col justify-center relative bottom-[10%]">
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] heroimg relative"></div>
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] heroimg absolute z-1 top-[50%] left-[50%]"></div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-[135px] py-[50px] gap-[50px]">
            <h2 className="text-center">How Do You Benefit?</h2>
            <p className="w-[700px] text-center">
            adbsafbkasjfbakadbsafbkasjfbak adbsafbkasjfbakadbsafbkasjf bakadbsafbkasjfbakadbs afbkasjfbakdkmadbsafbk asjfbakadbsafbkasjfbak adbsafbkasjfbakadbsafb kasjfbakadbsafbkasjfba kadbsafbkasjfbakdkmadb safbkasjfbakadbsafbkas jfbakadbsafbkasjfbakad bsafbkasjfbakadbsafbkasjf<br/><br/> bakadbsafbkasjfbakdkmadbs afbkasjfbakadbsafbkasjfba kadbsafbkas jfbakadbsafb kasjfbakad bsafbkasjfb akadbsafbka sjfbakdkmad bsafbkasjfb akadbsafbka sjfbakadbsa fbkasjfbaka dbsafbkasjf bakadbsafbkasjfb akadbsafbkasjfbak dkmadbsafbkasjfba kadbsafbkasjfbaka dbsafbkasjfbakadb safbkasjfbakadbsafbkasjfbakadbs afbkasjfbakdkmadbsafbkasjfba kadbsafbkasjfbakadbsafbkasjf bakadbsafbkasjfbak adbsafbkasjfbaka dbsaf bkasjfbakdk madbsafbkasjfbakadbsa fbkasjfbakadbsa fbkasjfbakadbs.
            </p>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
        </div>

        <div className="w-full flex flex-col bg-[#F8F9F9] gap-[50px] px-[135px] py-[50px]">
            <h2 className="text-center">What We Offer</h2>
            <div className="flex flex-col items-center gap-[25px]">
                <div className="flex gap-[25px]">
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <FaRegLightbulb className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Strategy Development</p>
                            <p className="w-[395px]">
                                - Marketing Strategy<br/>
                                - Public Relations & Communication Strategy<br/>
                                - Management & Strategy<br/>
                                - Product/Program Launch<br/>
                                - Strategy
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <RiOrganizationChart className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Event Management & Coordination</p>
                            <p className="w-[395px]">
                                - Press Conferences<br/>
                                - Dinners<br/>
                                - Awards<br/>
                                - Seminars/Workshops<br/>
                                - Corporate Xmas Parties
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-[25px]">
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <PiBroadcastFill className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Media Management & Coordination</p>
                            <p className="w-[395px]">
                                - Media Buying<br/>
                                - Media Planning<br/>
                                - Press Statements<br/>
                                - Press Release
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <IoMegaphoneSharp className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Publications Design & Printing</p>
                            <p className="w-[395px]">
                                - Annual reports<br/>
                                - Newsletter & Brochures<br/>
                                - Flyers<br/>
                                - Magazines<br/>
                                - Product Packaging Design
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-[25px]">
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <FaRegIdCard className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Brand Identity</p>
                            <p className="w-[395px]">
                                - Corporate & Promotional Merchandise Branding<br/>
                                - Indoor & Outdoor Branding<br/>
                                - Company Profile<br/>
                                - Business Cards <br/>
                                - Letterhead
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                        <TbWorldCode className="text-[#222952] w-[100px] h-[100px]" />
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[24px]">Website</p>
                            <p className="w-[395px]">
                                - Web Design<br/>
                                - Web Development<br/>
                                - Website Management<br/>
                                - Unlimited Business Emails
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                    <MdTablet className="text-[#222952] w-[100px] h-[100px]" />
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[24px]">Digital Media</p>
                        <p className="w-[395px]">
                            - Social Media Marketing<br/>
                            - Search Engine Marketing<br/>
                            - Content Generation & Optimisation<br/>
                            - Quality Link Building<br/>
                            - Integrated Online Marketing Strategies
                        </p>
                    </div>
                </div>

                <button className="w-[150px] h-[50px] mt-[25px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
            </div>
        </div>

        <div className="flex flex-col items-center px-[135px] py-[50px]">
            <h2 className="text-center mb-[50px]">Get In Touch</h2>
            <p className="w-[700px] text-center mb-[25px]">Let us transform your business, Let us transform your business, Let us transform your business, Let us transform your business, Let us transform your business</p>
            <button className="w-[150px] h-[50px] mt-[25px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get In Touch</button>
        </div>
      </div>
    </>
  )
}

export default Services
