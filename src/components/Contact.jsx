import { FaMapMarkerAlt } from "react-icons/fa";
import bg_secondary from "../assets/bg-secondary.png";
import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg_secondary})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl w-full p-8 text-center space-y-10 text-deep-teal">
        {/* Heading */}
        <h3 className="text-4xl font-body font-bold">Get in Touch</h3>
        <p className="text-lg font-body font-medium max-w-2xl mx-auto">
          We’d love to hear from you. Whether you’re looking for fresh catches,
          partnership opportunities, or just want to say hello — drop us a
          message!
        </p>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Email */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <HiOutlineMail className="text-5xl text-accent-red" />
            <p className="font-secondary text-xl">Email Us</p>
            <p className="font-body">hello@thisisfc88.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <IoPhonePortraitOutline className="text-5xl text-accent-red" />
            <p className="font-secondary text-xl">Call Us</p>
            <p className="font-body">+31 (0)6 10 25 55 03</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <FaMapMarkerAlt className="text-5xl text-accent-red" />
            <p className="font-secondary text-xl">Visit Us</p>
            <p className="font-body">
              123 Ocean Drive <br /> Rotterdam, NL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
