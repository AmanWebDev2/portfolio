import React from "react";

const Card = ({ icon,title,para,classes }) => {
  return (
    <div className={`general-details ${classes}`}>
      <div className="detail-icon">
        {/* <EmployeeIcon styles={{ scale: "0.8", color: "#d85c36" }} /> */}
        {icon}
      </div>
      <div className="details">
        <h3 className="font-medium mb-2 text-[#E3D6BE]">{title}</h3>
        <p className="text-[#E3D6BE]">{para}</p>
      </div>
    </div>
  );
};

export default Card;
