import React from "react";
import team from "../assets/team.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="py-5 md:py-10 bg-black text-center text-white px-4"></div>
      <div className="bg-black text-white py-20 px-4">
        {/* Container for the About Section */}
        <div className="max-w-screen-lg mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-3">
              Discover the journey and mission behind our blog.
            </p>
          </div>

          {/* Content Section */}
          <div className="md:flex md:space-x-8">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={team}
                alt="About Image"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <p className="text-gray-300 leading-relaxed mb-6">
                Welcome to{" "}
                <Link to="/blogs">
                  <span className="text-orange-500 font-semibold">
                    Our Blog
                  </span>
                </Link>{" "}
                your go-to destination for insightful articles on a wide range
                of topics. We focus on delivering valuable content that
                resonates with readers and adds a fresh perspective on trending
                subjects.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our blog is built on the principles of passion and community. We
                strive to create a platform where voices can be heard, stories
                can be shared, and knowledge can be passed on. Whether you’re
                seeking advice, inspiration, or in-depth discussions, you'll
                find it here.
              </p>

              {/* Call-to-Action Button */}
              <Link
                to="/blogs"
                className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md shadow-md transition-all duration-300"
              >
                Explore Our Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
