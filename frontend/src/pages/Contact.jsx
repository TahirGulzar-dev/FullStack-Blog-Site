import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="py-5 md:py-10 bg-black text-center text-white px-4"></div>

      {/* Contact Form Section */}
      <div
        name="contact"
        className="w-full bg-gradient-to-b from-black to-gray-900 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          {/* Heading */}
          <div className="pb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500">
              Contact
            </h2>
            <p className="py-4 text-sm md:text-base">
              Submit the form below to get in touch with me
            </p>
          </div>

          {/* Form */}
          <div className="flex justify-center items-center">
            <form
              method="POST"
              action="https://getform.io/f/ajjelrva"
              className="flex flex-col w-full md:w-3/4 lg:w-1/2 space-y-4"
            >
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-orange-500 transition-all duration-300"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-orange-500 transition-all duration-300"
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                rows={6}
                placeholder="Enter your message"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-orange-500 transition-all duration-300"
              ></textarea>

              {/* Submit Button */}
              <button className="text-white bg-gradient-to-r from-orange-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-500 transition-transform duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
