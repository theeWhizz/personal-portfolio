import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRoundedDots } from "react-icons/bi";

const ContactWithCTA = () => {
  return (
    <div className='h-screen'>
      <div className="grid md:grid-cols-2 gap-8 bg-background p-4 rounded-2xl shadow-2xl">
        <div className="bg-accent rounded-2xl p-8">
          <h3 className="text-lg mb-4 font-semibold text-background/80 uppercase">Connect with Me</h3>
          <h2 className="text-3xl md:text-5xl font-circular-web font-bold text-background flex flex-wrap"><BiSolidMessageRoundedDots />Let's Bring Your Digital Idea To Life</h2>
          <div className="px-2 py-6 text-background">
            <div className="flex items-center gap-4">
              <FaLocationDot className="h-12 w-12 p-2" color="#dfdff0/80" style={{ border: '1px solid #EEFCFC', borderRadius: '100%' }} />
              <div className="">
                <p className="font-semibold text-xl">My Location</p>
                <p className="text-md">NACICO Plaza, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-4">
              <IoMdMail className="h-12 w-12 p-2" size={28} color="#dfdff0/80" style={{ border: '1px solid #EEFCFC', borderRadius: '100%' }} />
              <div className="">
                <p className="font-semibold text-xl">Reach Out via Email</p>
                <p className="text-md">ongagablenick2@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="h-12 w-12 p-2" size={28} color="#dfdff0/80" style={{ border: '1px solid #EEFCFC', borderRadius: '100%' }} />
              <div className="">
                <p className="font-semibold text-xl">Phone Consultations</p>
                <p className="text-md">(+254) 704 250 557</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="">
            <div className="flex justify-between pr-4 gap-4">
              <div className="grid mb-8">
                <label className="text-md text-primary/50 font-robert-regular mb-4">Your First Name</label>
                <input className="border-[1px] text-primary/50 p-2" type="text" />
              </div>
              <div className="grid mb-8">
                <label className="text-md text-primary/50 font-robert-regular mb-4">Your Last Name</label>
                <input className="border-[1px] text-primary/50 p-2" type="text" />
              </div>
            </div>
            <div className="flex justify-between pr-4 gap-4">
              <div className="grid mb-8">
                <label className="text-md text-primary/50 font-robert-regular mb-4">Your Email</label>
                <input className="border-[1px] text-primary/50 p-2" type="text" />
              </div>
              <div className="grid mb-8">
                <label className="text-md text-primary/50 font-robert-regular mb-4">Your Phone Number</label>
                <input className="border-[1px] text-primary/50 p-2" type="text" />
              </div>
            </div>
          </div>
          <div className="grid mb-8 pr-1">
            <label className="text-md text-primary/50 font-robert-regular mb-4">Your Message</label>
            <input className="border-[1px] text-primary/50 p-2" type="text" />
          </div>
          <button className="uppercase py-3 px-6 bg-accent rounded-xl text-background font-robert-medium font-bold mt-2">Send Your Message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactWithCTA