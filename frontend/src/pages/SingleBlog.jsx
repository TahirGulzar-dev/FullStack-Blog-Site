import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div >
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* blog detil */}

      <div className="p-2 max-w-7xl mx-auto my-12 flex flex-col  md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h3 className="text-3xl mt-8 font-bold text-blue-500 mb-4 cursor-pointer">
            {title}
          </h3>

          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>

          <p className="mb-3 text-gray-600">
            <MdWatchLater className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <div className="text-base mb-6 text-gray-500">
            {content}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              a? Veniam deleniti vitae qui esse eius autem exercitationem
              commodi accusamus reprehenderit consequuntur voluptatem quam, cum
              perspiciatis ipsam saepe quaerat mollitia.
            </p>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto modi
            magni cum corrupti suscipit, nam quo. Laborum quidem vero quaerat
            facere cumque iusto. Rerum quisquam consequuntur, accusantium quis
            qui aliquam provident earum ea modi totam, sequi, fuga molestiae!
            Odio, aspernatur. <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              veritatis eius placeat quo reiciendis nostrum nam sequi sed,
              corporis libero voluptatum aliquid quasi non suscipit quod totam
              aliquam voluptatibus ut sunt nobis. Quaerat enim assumenda
              consequuntur voluptatibus sequi ut deserunt minus animi ex magnam,
              nesciunt tempore nihil impedit quasi dolores culpa non, est
              perspiciatis sint accusantium? Dolor provident nam magni molestiae
              suscipit. Facilis distinctio, recusandae perferendis corporis
              facere sint dolor?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              provident incidunt quod velit? Veritatis, porro.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
