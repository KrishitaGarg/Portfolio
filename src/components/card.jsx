import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-[#141429] border-2 border-purple-500 text-white shadow-lg rounded-2xl p-6 w-[320px]">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
