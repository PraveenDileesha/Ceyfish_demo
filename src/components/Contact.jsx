import React, { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import bg_secondary from "../assets/bg-secondary.png";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef((props, ref) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Your message has been sent!");
          formRef.current.reset(); // clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg_secondary})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-4xl w-full p-8 text-center space-y-10 text-deep-teal">
        {/* Heading */}
        <h3 className="text-4xl font-body font-bold">Get in Touch</h3>
        <p className="text-lg font-body font-semibold max-w-3xl mx-auto">
          We’d love to hear from you. Whether you’re looking for fresh catches,
          partnership opportunities, or just want to say hello — drop us a
          message!
        </p>

        <div className="flex items-center justify-center px-4">
          <form
            className="w-full max-w-3xl space-y-8"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="flex gap-4">
              <div className="flex items-center space-x-2 w-2/3">
                <label className="text-lg font-medium whitespace-nowrap">
                  Hello, my name is{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name*"
                  className="input-field"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-lg font-medium whitespace-nowrap">
                  I'm
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="role*"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center space-x-2 w-1/2">
                <label className="text-lg font-medium whitespace-nowrap">
                  at
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="organisation*"
                  className="input-field"
                  required
                />
              </div>

              <div className="flex items-center space-x-2 w-1/2">
                <label className="text-lg font-medium whitespace-nowrap">
                  in
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="location*"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-lg font-medium whitespace-nowrap">
                I'd like to meet because
              </label>
              <input
                type="text"
                name="objective"
                placeholder="objective*"
                className="input-field"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-lg font-medium whitespace-nowrap">
                Please reach me at
              </label>
              <input
                type="email"
                name="email"
                placeholder="email*"
                className="input-field"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-hero bg-btn-dark hover:border-btn-dark"
              >
                <span>
                  <PiPaperPlaneTiltBold className="btn-hero-icon text-light-aqua" />
                </span>
                <p className="btn-hero-text text-light-aqua tracking-widest">
                  Get introduced
                </p>
              </button>
            </div>
          </form>
        </div>

        {/* Contact info grid */}
        <div className="flex justify-between pt-10">
          {/* Email */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <div className="flex items-center space-x-2">
              <HiOutlineMail className="text-4xl text-accent-red" />
              <p className="font-secondary text-xl">Email Us</p>
            </div>
            <p className="font-body">hello@thisisfc88.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <div className="flex items-center space-x-2">
              <IoPhonePortraitOutline className="text-4xl text-accent-red" />
              <p className="font-secondary text-xl">Call Us</p>
            </div>
            <p className="font-body">+31 (0)6 10 25 55 03</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start space-y-2 font-semibold">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-4xl text-accent-red" />
              <p className="font-secondary text-xl">Visit Us</p>
            </div>
            <p className="font-body">
              123 Ocean Drive <br /> Rotterdam, NL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
