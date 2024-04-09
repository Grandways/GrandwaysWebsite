import Link from "next/link"
import Image from "next/image"
import { FaPaperPlane, FaBalanceScale, FaPeopleCarry } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import quote from '@/public/assets/quote.png';
import abLeft from "@/public/assets/ab-left.png"
import abRight from "@/public/assets/ab-right.png"

const About = () => {
  return (
    <>
      <div>
        <div className="w-full h-[700px] bg-[#F8F9F9] px-[135px] flex">
          <div className="flex flex-col w-1/2 justify-center">
            <h1 className="mb-[15px]">We Go The<br/>Extra Mile</h1>
            <p className="w-[470px] mb-[25px]">The Grandways Team consists of a group of resourceful, noble individuals who are humble, highly experienced and hard working.</p>
            <Link href={"/contact"}>
              <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>
            </Link>
          </div>
          <div className="flex flex-col justify-center relative bottom-[10%]">
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] relative">
              <Image src={abLeft} alt="" width={400} height={250} className="" />
            </div>
            <div className="w-[400px] h-[250px] bg-[#D9D9D9] rounded-[15px] heroimg absolute z-1 top-[50%] left-[50%]">
              <Image src={abRight} alt="" width={400} height={250} className="" />
            </div>
          </div>
        </div>

        <div className="w-full px-[135px] py-[50px] flex justify-between">
          <div className="flex flex-col items-center gap-[15px]">
            <p className="text-[36px] text-[#222952] font-bold">368</p>
            <p className="text-[24px]">Clientele</p>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <p className="text-[36px] text-[#222952] font-bold">99%</p>
            <p className="text-[24px]">Feedback</p>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <p className="text-[36px] text-[#222952] font-bold">850</p>
            <p className="text-[24px]">Projects Conpleted</p>
          </div>
          <div className="flex flex-col items-center gap-[15px]">
            <p className="text-[36px] text-[#222952] font-bold">100%</p>
            <p className="text-[24px]">Creativity</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-[135px] py-[50px] bg-[#F8F9F9] gap-[50px]">
          <div className="flex gap-[25px] relative">
            <p className="w-1/2 text-[24px]">We go the extra mile for our clients, hence our brand mantra: Brilliant Minds. Expect More</p>
            <div className="flex relative w-1/2">
              <p className="text-[24px]">“The business that considers itself immune to the necessity of advertising, sooner or later finds itself immune to business” - Derby Brown</p>
              <Image src={quote} alt="quote" width={120} height={200} className="absolute z-0 left-[80%]" />
            </div>
          </div>
          <Link href={"/contact"}>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
          </Link>
        </div>

        <div className="w-full flex flex-col items-center px-[135px] py-[50px] gap-[50px]">
          <h2 className="text-center">Our Values</h2>

          <div className="flex gap-[50px]">
            <div className="group w-[250px] flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#222952] flex items-center justify-center rounded-[50px] group-hover:w-[100px] group-hover:h-[100px] ease-in-out duration-[250ms]">
                <FaPaperPlane className="w-[35px] h-[35px] text-white" />
              </div>
              <p className="text-[24px] text-center">Continuous Improvement</p>
              <p className="text-center">We strive to become better at what we do, so as to constantly deliver impactful brand solutions.</p>
            </div>

            <div className="group w-[250px] flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#222952] flex items-center justify-center rounded-[50px] group-hover:w-[100px] group-hover:h-[100px] ease-in-out duration-[250ms]">
                <FaHand className="w-[35px] h-[35px] text-white" />
              </div>
              <p className="text-[24px] text-center">Honesty</p>
              <p className="text-center">We serve our clients with highest moral ethics.</p>
            </div>

            <div className="group w-[250px] flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#222952] flex items-center justify-center rounded-[50px] group-hover:w-[100px] group-hover:h-[100px] ease-in-out duration-[250ms]">
                <FaBalanceScale className="w-[35px] h-[35px] text-white" />
              </div>
              <p className="text-[24px] text-center">Integrity</p>
              <p className="text-center">We are honest with others and ourselves and deliver to our promise.</p>
            </div>

            <div className="group w-[250px] flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#222952] flex items-center justify-center rounded-[50px] group-hover:w-[100px] group-hover:h-[100px] ease-in-out duration-[250ms]">
                <FaPeopleCarry className="w-[35px] h-[35px] text-white" />
              </div>
              <p className="text-[24px] text-center">Humility</p>
              <p className="text-center">It is the foundation of our existence, to bring the change that you wish to see in the world and being gracious in our delivery.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-[135px] py-[50px]">
          <h2 className="text-center mb-[50px]">Our Team</h2>
          <p className="text-[24px] text-center mb-[25px]">Our team consists of individuals in the following fields:</p>
          
          <div className="flex flex-col items-center gap-[25px]">
            <div className="flex items-center gap-[50px]">
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="absolute z-1">Creative D<span className="text-white group-hover:text-black transition duration-500 ease-in-out">esign & Animation</span></p>
              </div>
              
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="text-center absolute z-1">Pro<span className="text-white group-hover:text-black transition duration-500 ease-in-out">duction &</span><br/>Quali<span className="text-white group-hover:text-black transition duration-500 ease-in-out">ty Assurance</span></p>
              </div>
              
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="absolute z-1">Bran<span  className="text-white group-hover:text-black transition duration-500 ease-in-out">d Strategy</span></p>
              </div>
            </div>
            
            <div className="flex items-center gap-[50px]">
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="absolute z-1">PR & M<span className="text-white group-hover:text-black transition duration-500 ease-in-out">edia Specialist</span></p>
              </div>
              
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="text-center absolute z-1">Co<span className="text-white group-hover:text-black transition duration-500 ease-in-out">py Writing</span></p>
              </div>
              
              <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden">
                <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
                <p className="absolute z-1">Pu<span className="text-white group-hover:text-black transition duration-500 ease-in-out">blications</span></p>
              </div>
            </div>
            
            <div className="group w-[270px] h-[100px] bg-[#222952] teamcard flex justify-center items-center rounded-[15px] relative overflow-hidden mb-[25px]">
              <div className="w-[125px] h-[125px] group-hover:w-[300px] group-hover:right-[-5%] duration-500 ease-in-out rounded-[100px] bg-white absolute z-0 right-[60%]"></div>
              <p className="absolute z-1">Ph<span className="text-white group-hover:text-black transition duration-500 ease-in-out">otography</span></p>
            </div>

            <Link href={"/contact"}>
              <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About