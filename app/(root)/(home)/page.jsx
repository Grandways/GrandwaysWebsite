import Image from "next/image";
import Link from "next/link";
import { FaRegLightbulb, FaRegIdCard } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMegaphoneSharp } from "react-icons/io5";

export const metadata = {
  title: "Grandways - Brilliant Minds, Expect More",
  description: "",
};

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full h-[700px] bg-[#000000] flex items-center max-md:px-[16px] max-md:flex-col px-[135px]">
          <div>
            <Image
              src="/assets/heroimg.png"
              width={530}
              height={530}
              alt="test"
              className=""
            />
          </div>
          <hr className="w-[300px] rotate-90 text-white max-md:rotate-0" />
          <div className="relative max-md:translate-y-[100px]">
            <p className="text-[24px] italic text-white w-[500px] translate-y-[-50px] max-md:w-full max-md:text-center">
              We believe in your explosive ideas. Begin your journey with us...
            </p>
            <Image
              src="/assets/h1.png"
              width={840}
              height={365}
              alt=""
              className="absolute z-10 translate-x-[-100px] translate-y-[-100px] max-md:translate-y-[-50px] max-md:translate-x-[-0px]"
            />
          </div>
        </div>

        <div className="w-full px-[135px] max-md:px-[16px] max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mt-[50px] mb-[25px] max-md:text-[36px]">About</h2>
          <div className="flex mb-[50px]">
            <div>
              <p className="w-[700px] max-md:w-[300px] max-md:text-center max-md:text-[16px]">
                At Grandways, we transform businesses, brands, and organisations
                through the use of visual and emotive connections, aiming to
                create a lasting commercial and social impact. We go the extra
                mile for our clients, hence the mantra;{" "}
                <span className="font-bold">Brilliant Minds, Expect More!</span>
                <br />
                <br />
                The GrandTeam consists of a group of resourceful, noble
                individuals, who are humble, highly experienced, and hardworking
                in the following fields:
                <br />
                <br />
              </p>

              <p className="font-bold w-[700px] max-md:w-[300px] max-md:text-center max-md:text-[16px]">
                Graphic Design and Animation | Production and Quality Assurance
                | Brand Strategy | Public Relations and Media Specialist | Copy
                Writing | Publications
              </p>
            </div>

            <div className="w-[370px] h-[200px] bg-[#EAE8E8] ml-[90px] rounded-[15px] flex items-center justify-center overflow-hidden max-md:hidden">
              <Image
                src="/assets/a-sec.png"
                alt=""
                width={370}
                height={200}
                className=""
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[50px] bg-[#f0f0f0] max-md:px-[16px] max-md:py-[25px]">
          <h2 className="mb-[50px] max-md:text-[36px]">Our Services</h2>
          <div className="flex flex-col gap-[20px] mb-[50px]">
            <div className="flex gap-[25px] max-md:flex-col">
              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaRegLightbulb className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px] font-bold">
                    Strategy Development
                  </p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                    We devise the right strategy for your brand to ensure the
                    right message reaches the right audience, at the right time,
                    every time. Brand Strategy, Integrated Marketing and
                    Communications Strategy.
                  </p>
                </div>
              </div>

              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaRegIdCard className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px] font-bold">
                    Brand Identity
                  </p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                    We develop brands that will give a true reflection of its
                    promise to its own audience, from initial conceptualisation
                    of a new brand, to identifying a brand strategy or even
                    re-branding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[25px] max-md:flex-col">
              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <FaPerson className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px] font-bold">
                    Merchandise
                  </p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                    Grandways finds the best promotional items, corporate
                    merchandise and memorabilia that will communicate your brand
                    to your audience. Corporate & Promotional merchandise,
                    Branding material, Radio jingles (Script and production),
                    etc.
                  </p>
                </div>
              </div>

              <div className="services w-[570px] h-[225px] flex justify-between px-[25px] items-center bg-[#ffffff] rounded-[15px] max-md:w-fit max-md:h-fit max-md:p-[15px]">
                <IoMegaphoneSharp className="text-[#222952] w-[100px] h-[100px] max-md:hidden" />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[24px] max-md:text-[18px] font-bold">
                    Activations & Publications
                  </p>
                  <p className="w-[395px] max-md:text-[16px] max-md:w-[328px]">
                    With activations, we connect consumers with brands in ways
                    that transcend conventional means of interaction. We aim to
                    connect people to brands in a way that inspires and triggers
                    action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href={"/services"}>
            <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px]">
              View Services
            </button>
          </Link>
        </div>

        <div className="w-full py-[50px] px-[135px] max-md:px-[16px] max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="mb-[25px] max-md:text-[36px]">Our Giants</h2>
          <div className="flex justify-between">
            <p className="w-1/2 mb-[50px] max-md:text-[16px] max-md:text-center max-md:w-full">
              Celebrating our valued partnerships with leading brands.
              Appreciating the companies we've collaborated with, each
              representing a successful journey in marketing and advertising.
              Together, we've achieved remarkable results and fueled growth for
              our clients.
            </p>
            <Link href={"/contact"}>
              <button className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#000000] border-solid mb-[75px] max-md:hidden">
                Work With Us
              </button>
            </Link>
          </div>

          <div className="w-full h-[150px] bg-[#f0f0f0] flex gap-[30px] justify-between overflow-x-auto overflow-y-hidden items-center rounded-[15px] p-[25px] max-md:flex-wrap max-md:w-full max-md:h-full max-md:gap-[10px] max-md:p-[15px] max-md:justify-center">
            <Image
              src="/assets/nbfira-logo.png"
              alt="nbfira logo"
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/cll-logo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/kbl-logo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/oxygas-logo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/bcm-logo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/guc-logo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/acca.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/baoa.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/bokomo.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/bomaid.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/botusafe.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/nacb.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/ndb.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/orthosurge.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/sadc.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/ub.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
            <Image
              src="/assets/zeta.png"
              alt=""
              width={150}
              height={100}
              className="rounded-[5px] partners"
            />
          </div>
        </div>
      </div>
    </>
  );
}
