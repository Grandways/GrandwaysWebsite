'use client'

import Link from "next/link"
import supabase from "@/app/config/supabaseClient"
import { useState } from "react"

const Contact = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("First Name: ", fname)
        console.log("Last Name: ", lname)
        console.log("Email: ", email)
        console.log("Subject: ", subject)
        console.log("Message: ", message)
    }

  return (
    <>
      <div>
        <div className="w-full h-[700px] flex px-[135px] py-[50px] bg-[#f0f0f0] max-md:flex-col max-md:h-fit max-md:gap-[50px] max-md:px-[16px]">
            <div className="w-1/2 flex flex-col gap-[50px] max-md:w-full">
                <h2 className="max-md:text-[36px] max-md:text-center">Get In Touch</h2>
                <div className="flex flex-col gap-[25px]">
                    <p className="max-md:text-[16px] max-md:text-center">
                        Send us a quick message and we’ll get back to you as soon as we can. Alternatively you can email – <Link href={`mailto:${'sales@grandways.co.bw'}`}><span className="font-bold text-[#222952]">sales@grandways.co.bw</span></Link>
                    </p>
                    <p className="max-md:text-[16px] max-md:text-center">
                        You can reach us from:<br/>08:30-18:00 Monday to Friday<br/>09:00-13:00 Saturdays<br/>We are CLOSED on Sundays
                    </p>
                </div>

                <div className="flex flex-col gap-[25px]">
                    <p className="max-md:text-[16px] max-md:text-center">
                        (+267) 311 4567<br/><Link href={`mailto:${'sales@grandways.co.bw'}`}><span className="font-bold text-[#222952]">sales@grandways.co.bw</span></Link>
                    </p>
                    <p className="max-md:text-[16px] max-md:text-center">
                        Plot 75748 Setlhoa Showrooms, Unit 4<br/>Setlhoa, Gaborone
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex max-md:w-full">
                <form onSubmit={handleSubmit} className="w-[570px] h-[600px] flex flex-col justify-between gap-[10px] bg-white rounded-[15px] p-[25px]">
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-md:text-[16px]">First Name*</p>
                        <input
                            type="text"
                            onChange={(e => setFname(e.target.value))}
                            value={fname}
                            id="firstname"
                            className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]" 
                            required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-md:text-[16px]">Last Name*</p>
                        <input
                            type="text"
                            onChange={(e => setLname(e.target.value))}
                            value={lname}
                            id="lastname"
                            className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                            required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-md:text-[16px]">Email*</p>
                        <input 
                            type="email"
                            onChange={(e => setEmail(e.target.value))}
                            value={email}
                            id="email"
                            className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                            required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-md:text-[16px]">Subject*</p>
                        <input
                            type="text"
                            onChange={(e => setSubject(e.target.value))}
                            value={subject}
                            id="subject"
                            className="w-full h-[40px] rounded-[7.5px] bg-[#f0f0f0] px-[10px]"
                            required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-md:text-[16px]">Message*</p>
                        <textarea
                            onChange={(e => setMessage(e.target.value))}
                            value={message}
                            id="message"
                            className="w-full h-[100px] rounded-[7.5px] bg-[#f0f0f0] px-[10px] py-[5px]" />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[40px] bg-transparent text-[18px] border-[1px] border-black rounded-[7.5px] max-md:text-[16px]">Submit</button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
