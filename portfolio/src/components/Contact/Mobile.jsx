import React, { useState } from "react";
import { FaTransgender } from "react-icons/fa";

function Mobile() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen ">
      {/* iPhone Frame */}
      <div
        className="w-[470px] h-[800px] bg-neutral-900 rounded-[50px] border-[16px] border-gray-100 relative shadow-xl overflow-hidden"
        style={{ transform: "scale(0.75)" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[210px] h-[30px] bg-gray-100 rounded-b-2xl z-10 flex justify-center items-center">
          {/* Camera */}
          <div className="w-[14px] h-[14px] bg-gray-800 rounded-full shadow-inner"></div>
        </div>

        {/* Editable Gmail-Style Form Layout */}
        <form
          className="px-4 pt-16 pb-6 overflow-y-auto h-full font-sans text-sm text-white"
          onSubmit={(e) => {
            e.preventDefault();
            const mailtoLink = `mailto:shanmukhareddyvasa@gmail.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(
              message
            )}%0D%0A%0D%0AFrom:%20${encodeURIComponent(to)}`;
            window.location.href = mailtoLink;
          }}
        >
          <h1 className="text-2xl font-medium mb-4 text-white0">New Message</h1>

          {/* To Field */}
          <div className="border-b border-gray-300 py-2 flex flex-wrap items-start text-lg font-medium">
            <label className="text-gray-200 mr-2 mb-1">From</label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="outline-none flex-1 text-white bg-transparent min-w-[150px]"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="border-b border-gray-300 py-2 flex flex-wrap items-start text-lg font-medium">
            <label className="text-gray-200 mr-2 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="outline-none flex-1 text-white bg-transparent min-w-[150px]"
              placeholder="Feedback about the app"
            />
          </div>

          {/* Message Body Field */}
          <div className="py-4 flex items-start text-lg font-medium">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              className="w-full text-white outline-none resize-none bg-transparent flex-1"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Bottom bar with Send button */}
          <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 bg-gray- p-4 flex justify-end">
            <button
              type="submit"
              disabled={!to || !message}
              className={`text-white font-medium px-6 py-2 rounded-full transition duration-300 
    ${
      to && message
        ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        : "bg-gray-400 cursor-not-allowed"
    }
  `}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mobile;
