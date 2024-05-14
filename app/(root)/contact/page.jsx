"use client";

import Link from "next/link";
import supabase from "@/app/config/supabaseClient";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: "",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("form")
      .insert([
        {
          first_name: form.fname,
          last_name: form.lname,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
      ])
      .select();

    if (error) {
      console.error("there was an error", error);
    } else {
      console.log("sent data");
    }
  };

  return (
    <>
      <div>
        <div className="w-full h-[700px] flex px-[135px] py-[50px] bg-[#f0f0f0] max-md:flex-col max-md:h-fit max-md:gap-[50px] max-md:px-[16px]">
          <div className="w-1/2 flex flex-col gap-[25px] max-md:w-full">
            <h2 className="max-md:text-[36px] max-md:text-center">
              Get In Touch
            </h2>
            <div className="flex flex-col gap-[25px]">
              <p className="max-md:text-[16px] max-md:text-center">
                Send us a quick message and we’ll get back to you as soon as we
                can. Alternatively, you can email –{" "}
                <Link href={`mailto:${"sales@grandways.co.bw"}`}>
                  <span className="font-bold text-[#222952]">
                    sales@grandways.co.bw
                  </span>
                </Link>
              </p>
              <p className="max-md:text-[16px] max-md:text-center">
                You can reach us from:
                <br />
                08:00-17:00 Monday to Friday
                <br />
                We are CLOSED on Saturdays & Sundays
              </p>
            </div>

            <div className="flex flex-col gap-[25px]">
              <p className="max-md:text-[16px] max-md:text-center">
                (+267) 311 4567
                <br />
                <Link href={`mailto:${"sales@grandways.co.bw"}`}>
                  <span className="font-bold text-[#222952]">
                    sales@grandways.co.bw
                  </span>
                </Link>
              </p>

              <p className="text-[24px]">Our Locations</p>

              <p className="max-md:text-[16px] max-md:text-center">
                Plot 75748 Setlhoa Showrooms, Unit 4 Setlhoa,
                <br />
                Gaborone, <span className="font-bold">Botswana</span>
              </p>
              <p className="max-md:text-[16px] max-md:text-center">
                <br />
                Selebi Phikwe, <span className="font-bold">Botswana</span>
              </p>
              <p className="max-md:text-[16px] max-md:text-center">
                Moon Star Complex, First Floor, Room 12,
                <br />
                Maseru, <span className="font-bold">Lesotho</span>
              </p>
            </div>
          </div>
          <div className="w-1/2 flex max-md:w-full">
            <form
              onSubmit={handleSubmit}
              className="w-[570px] h-[600px] flex flex-col justify-between gap-[10px] bg-white rounded-[15px] p-[25px]"
            >
              <div className="flex flex-col gap-[10px]">
                <p className="max-md:text-[16px]">First Name*</p>
                <input
                  type="text"
                  onChange={(e) => setForm({ ...form, fname: e.target.value })}
                  value={form.fname}
                  className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="max-md:text-[16px]">Last Name*</p>
                <input
                  type="text"
                  onChange={(e) => setForm({ ...form, lname: e.target.value })}
                  value={form.lname}
                  className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="max-md:text-[16px]">Email*</p>
                <input
                  type="email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                  className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="max-md:text-[16px]">Subject*</p>
                <input
                  type="text"
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  value={form.subject}
                  className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="max-md:text-[16px]">Message*</p>
                <textarea
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  value={form.message}
                  className="w-full h-[100px] rounded-[7.5px] bg-[#f0f0f0] px-[10px] py-[5px]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[40px] bg-transparent text-[18px] border-[1px] border-black rounded-[7.5px] max-md:text-[16px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
