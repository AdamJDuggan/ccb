import React from "react";

export default function Section({ id, title, className, children }) {
  return (
    <section
      id={id}
      className={"flex align-center justify-center py-12 px-6" + className}
    >
      <h2 className="text-5xl text-gray-700 font-bold mb-16">{title}</h2>

      {children}
    </section>
  );
}
