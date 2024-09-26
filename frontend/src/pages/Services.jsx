import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-screen-lg mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold ">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">
              Explore the diverse services we offer to help elevate your blog
              experience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  📝
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                Content Writing
              </h3>
              <p className="text-gray-400 text-center">
                High-quality, engaging articles and blogs tailored to your
                audience’s needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  📊
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                SEO Optimization
              </h3>
              <p className="text-gray-400 text-center">
                Boost your blog’s visibility on search engines with proven SEO
                strategies.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  🎨
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                Graphic Design
              </h3>
              <p className="text-gray-400 text-center">
                Eye-catching visuals that enhance your blog’s aesthetics and
                user engagement.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  💻
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                Web Development
              </h3>
              <p className="text-gray-400 text-center">
                Custom-built websites that align with your brand’s goals and
                target audience.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  📸
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                Photography
              </h3>
              <p className="text-gray-400 text-center">
                Professional photography services to give your blog stunning
                visual appeal.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <span className="inline-block p-4 bg-orange-500 text-white rounded-full text-3xl">
                  🎥
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500 text-center">
                Video Editing
              </h3>
              <p className="text-gray-400 text-center">
                Professional video editing to create engaging content for your
                blog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
