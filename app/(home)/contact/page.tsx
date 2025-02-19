import Banner from "../../../components/Banner";
import { MapPin,Clock,PhoneCall,Mail } from "lucide-react";

const page = () => {
  return (
    <>
        <Banner />
        <div className="mx-4 px-4 py-12">
        {/* Contact Page Header */}
        <p className="text-center text-gray-600 mb-12">
          Have a question? Fill out the form, and we will get back to you as soon as possible.
        </p>
  
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section: Contact Info */}
          <div className="space-y-6 mx-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600">
              If you need any help, feel free to reach out to us through any of the following ways.
            </p>
  
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="border-2 border-primary rounded-full"><MapPin size={40} className="p-2 text-primary" /></span>
                <p>Tokyo Sumida-ku Hugashimukolima 410-12-102, Japan</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="border-2 border-primary rounded-full"><PhoneCall size={40} className="p-2 text-primary" /></span>
                <p>+8180-3606-4653</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="border-2 border-primary rounded-full"><Mail size={40} className="p-2 text-primary" /></span>
                <p>fongilberttangu@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="border-2 border-primary rounded-full"><Clock size={40} className="p-2 text-primary" /></span>
                <p>8:00AM - 6:00PM</p>
              </div>
            </div>
  
            {/* Social Media Icons */}
          </div>
  
          {/* Right Section: Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block font-semibold">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter your full name" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
  
              {/* Email Field */}
              <div>
                <label className="block font-semibold">Email Address <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-md" required />
              </div>
  
              {/* Subject Field */}
              <div>
                <label className="block font-semibold">Subject <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter the subject" className="w-full p-3 border border-gray-300 rounded-md" required/>
              </div>
  
              {/* Message Field */}
              <div>
                <label className="block font-semibold">Message <span className="text-red-500">*</span></label>
                <textarea placeholder="Write your message..." rows={4} className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
              </div>
  
              {/* Submit Button */}
              <button type="submit" className="w-full bg-primary p-3 rounded-md text-white font-bold hover:bg-black transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
    </>
  )
}

export default page