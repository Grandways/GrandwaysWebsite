import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-[64px] w-full px-[135px] flex justify-between items-center">
          <div className="w-[50px] h-[50px] bg-red-600 cursor-pointer"></div>
          <div className="flex gap-[20px]">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Brands</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>

        <div className="w-full pt-[100px] pb-[50px] flex flex-col items-center">
          <h1 className="text-center mb-[50px]">Brilliant Minds,<br/>Expect More</h1>
          <h2 className="text-center text-[24px] mb-[50px]">
            For <span className="italic">all your <span className="font-bold">marketing & advertising</span></span> needs, The next generation of the<br/>advertising world
          </h2>

          <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">Get Started</button>

          <div className="flex justify-center relative">
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] rounded-[15px] absolute z-2 left-[280px] top-[150px]"></div>
            <div className="w-[370px] h-[450px] bg-[#D1D1D1] rounded-[15px]"></div>
            <div className="w-[370px] h-[225px] bg-[#D9D9D9] rounded-[15px] absolute z-2 right-[280px] top-[75px]"></div>
          </div>
        </div>

        <div className="w-full h-[600px] px-[135px]">
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
            
          <div className="w-full h-[200px] flex justify-between items-center">
            <div>
              <p className="text-[36px]">123</p>
              <p className="text-[24px]">Clientele</p>
            </div>
              
            <div>
              <p className="text-[36px]">123</p>
              <p className="text-[24px]">Clientele</p>
            </div>
              
            <div>
              <p className="text-[36px]">123</p>
              <p className="text-[24px]">Clientele</p>
            </div>
              
            <div>
              <p className="text-[36px]">123</p>
              <p className="text-[24px]">Clientele</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[50px]">
          <h2 className="mb-[50px]">Our Services</h2>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[25px]">
              <div className="w-[570px] h-[225px] bg-[#D1D1D1] rounded-[15px]"></div>
              <div className="w-[570px] h-[225px] bg-[#D1D1D1] rounded-[15px]"></div>
            </div>
            <div className="flex gap-[25px]">
              <div className="w-[570px] h-[225px] bg-[#D1D1D1] rounded-[15px]"></div>
              <div className="w-[570px] h-[225px] bg-[#D1D1D1] rounded-[15px]"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[50px] px-[135px]">
          <h2 className="mb-[50px]">Our Values</h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#D9D9D9]"></div>
              <p className="text-[24px] text-center">Continuous Improvement</p>
              <p className="text-center">We strive to become better at what we do, so as to constantly deliver impactful brand solutions.</p>
            </div>

            <div className="flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#D9D9D9]"></div>
              <p className="text-[24px] text-center">Continuous Improvement</p>
              <p className="text-center">We strive to become better at what we do, so as to constantly deliver impactful brand solutions.</p>
            </div>

            <div className="flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#D9D9D9]"></div>
              <p className="text-[24px] text-center">Continuous Improvement</p>
              <p className="text-center">We strive to become better at what we do, so as to constantly deliver impactful brand solutions.</p>
            </div>
            
            <div className="flex flex-col items-center gap-[15px]">
              <div className="w-[75px] h-[75px] bg-[#D9D9D9]"></div>
              <p className="text-[24px] text-center">Continuous Improvement</p>
              <p className="text-center">We strive to become better at what we do, so as to constantly deliver impactful brand solutions.</p>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}
