import Image from "next/image";
import Link from "next/link";
import { FaRegLightbulb, FaRegIdCard } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMegaphoneSharp } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full pt-[100px] pb-[50px] flex flex-col items-center">
          <h1 className="text-center mb-[50px]">Brilliant Minds,<br/>Expect More</h1>
          <h2 className="text-center text-[24px] mb-[50px] font-light">
            For <span className="italic">all your <span className="font-bold">marketing & advertising</span></span> needs, The next generation of the<br/>advertising world.
          </h2>

          <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>

          <div className="flex justify-center relative">
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] heroimg rounded-[15px] absolute z-2 left-[280px] top-[150px]"></div>
            <div className="w-[370px] h-[450px] bg-[#D1D1D1] heroimg rounded-[15px]"></div>
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] heroimg rounded-[15px] absolute z-2 right-[280px] top-[75px]"></div>
          </div>
        </div>

        <div className="w-full px-[135px]">
          <h2 className="mt-[50px] mb-[25px]">About</h2>
          <div className="flex mb-[50px]">
            <div>
              <p className="w-[700px]">
                  At Grandways, we transform businesses, brands, and organisations through the use of visual and emotive connections, aiming to create a lasting commercial and social impact. We go the extra mile for our clients, hence the mantra; Brilliant Minds, Expect More.
                <br/><br/>
                  The GrandTeam consists of a group of resourceful, noble individuals, who are humble, highly experienced, and hardworking in the following fields:
              </p>

              <p className="font-bold w-[700px]">
                  Graphic Design and Animation | Production and Quality Assurance | Brand Strategy | Public Relations and Media Specialist | Copy Writing | Publication
              </p>
            </div>

            <div className="w-[370px] h-[200px] bg-[#EAE8E8] ml-[90px] rounded-[15px]"></div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[50px] bg-[#F8F9F9]">
          <h2 className="mb-[50px]">Our Services</h2>
          <div className="flex flex-col gap-[20px] mb-[50px]">

            <div className="flex gap-[25px]">
              <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                <FaRegLightbulb className="text-[#222952] w-[100px] h-[100px]" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px]">Strategy Development</p>
                  <p className="w-[395px]">We devise the right strategy for your brand to ensure the right message reaches the right audience, at the right time, every time. Brand Strategy Integrated Marketing and Communications Strategy</p>
                </div>
              </div>
              
              <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                <FaRegIdCard className="text-[#222952] w-[100px] h-[100px]" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px]">Brand Identity</p>
                  <p className="w-[395px]">We develop brands that will give a true reflection of its promise to its own audience. From initial conceptualisation of a new brand, identifying a brand strategy or even re-branding</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[25px]">
              <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                <FaPerson className="text-[#222952] w-[100px] h-[100px]" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px]">Merchandise</p>
                  <p className="w-[395px]">Grandways finds the best promotional items, corporate merchandise, memorabilia that will speak your brand to your audience. Corporate & Promotional merchandise Branding material Radio jingles (Script and production)</p>
                </div>
              </div>

              <div className="w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px]">
                <IoMegaphoneSharp className="text-[#222952] w-[100px] h-[100px]" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px]">Activations & Publications</p>
                  <p className="w-[395px]">With activations we connect consumers with brands in ways that transcend conventional means of interaction. We aim to connect people to brands in a way that inspires and requires action</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">View Services</button>
        </div>

        <div className="w-full py-[50px] px-[135px]">
          <h2 className="mb-[25px]">Our Giants</h2>
          <div className="flex justify-between">
            <p className="w-1/2 mb-[50px]">Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.</p>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Work With Us</button>
          </div>

          <div className="w-full h-[150px] bg-[#F8F9F9] flex justify-between items-center rounded-[15px] p-[25px]">
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
            <div className="bg-white w-[150px] h-[100px] rounded-[7.5px]"></div>
          </div>
        </div>
      </div>  
    </>
  );
}
