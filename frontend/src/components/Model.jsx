import React from "react";

const Model = ({ isOpen, onClose }) => {
  return (
    // <div
    //   className={`fixed top-0 left-0 h-full w-full flex items-center justify-center ${isOpen}?"":"hidden"`}
    // >
    <div
      className={`fixed top-0 left-0 h-full w-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="model-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">
            Please login Here!
          </h2>

          <form
            className="mb-5"
            action="
"
          >
            <div className="mb-5">
              <input
                type="email"
                name="email"
                placeholder="example@gamil.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6a64f1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none transition-all duration-200">
                Login
              </button>
            </div>
          </form>

          {/* on close  */}
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;

// import React from "react";

// const Model = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-full w-full flex items-center justify-center ${
//         isOpen ? "" : "hidden"
//       }`}
//     >
//       <div className="model-container">
//         <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
//           <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">
//             Please login Here!
//           </h2>

//           <form className="mb-5" action="#">
//             <div className="mb-5">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="example@gamil.com"
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6a64f1] focus:shadow-md"
//               />
//             </div>
//             <div className="mb-5">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-600 outline-none focus:border-[#6a64f1] focus:shadow-md"
//               />
//             </div>
//             <div>
//               <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none transition-all duration-200">
//                 Login
//               </button>
//             </div>
//           </form>

//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-5 transition-all duration-200"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Model;
