import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
          to={`/blogs/${blog.id}`}
          className="p-5 shadow-xl cursor-pointer rounded-lg"
          key={blog.id}
        >
          <div>
            <img className="w-full" src={blog.image} alt="" />
          </div>

          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
            {blog.title}
          </h3>

          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>

          <p className="text-sm text-gray-500">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
