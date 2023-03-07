import React from "react";

const PageHeadline = ({ headline }) => {
  return (
    <div className="title text-center w-max	mx-auto mt-12">
      <div className="contact-title text-xl md:text-2xl text-gray-200 uppercase tracking-widest font-semibold">
        {headline}
      </div>
    </div>
  );
};

export default PageHeadline;
