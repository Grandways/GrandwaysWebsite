import Link from "next/link"

const Contact = () => {
  return (
    <>
      <div>
        <div className="w-full h-[700px] flex px-[135px] py-[50px] bg-[#F8F9F9]">
            <div className="w-1/2 flex flex-col gap-[50px]">
                <h2>Get In Touch</h2>
                <div className="flex flex-col gap-[25px]">
                    <p>
                        Send us a quick message and we’ll get back to you as soon as we can. Alternatively you can email – <Link href={`mailto:${'sales@grandways.co.bw'}`}><span className="font-bold text-[#222952]">sales@grandways.co.bw</span></Link>
                    </p>
                    <p>
                        You can reach us from:<br/>08:30-18:00 Monday to Friday<br/>09:00-13:00 Saturdays<br/>We are CLOSED on Sundays
                    </p>
                </div>

                <div className="flex flex-col gap-[25px]">
                    <p>
                        (+267) 311 4567<br/><Link href={`mailto:${'sales@grandways.co.bw'}`}><span className="font-bold text-[#222952]">sales@grandways.co.bw</span></Link>
                    </p>
                    <p>
                        Plot 75748 Setlhoa Showrooms, Unit 4<br/>Setlhoa, Gaborone
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex">
                <div className="w-[570px] h-[600px] flex flex-col justify-between gap-[10px] bg-white rounded-[15px] p-[25px]">
                    <div className="flex flex-col gap-[10px]">
                        <p>First Name*</p>
                        <input type="text" className="w-full h-[40px] rounded-[7.5px] bg-[#F8F9F9] px-[10px]" required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p>Last Name*</p>
                        <input type="text" className="w-full h-[40px] rounded-[7.5px] bg-[#F8F9F9] px-[10px]" required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p>Email*</p>
                        <input type="email" className="w-full h-[40px] rounded-[7.5px] bg-[#F8F9F9] px-[10px]" required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p>Subject*</p>
                        <input type="text" className="w-full h-[40px] rounded-[7.5px] bg-[#F8F9F9] px-[10px]" required />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p>Message*</p>
                        <textarea name="message" id="message" cols="30" rows="10" className="w-full h-[100px] rounded-[7.5px] bg-[#F8F9F9] px-[10px] py-[5px]"></textarea>
                    </div>

                    <button className="w-full h-[40px] bg-transparent text-[18px] border-[1px] border-black rounded-[7.5px]">Submit</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
