import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around py-10 bg-card flex-wrap gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-[1rem] md:text-[1.71rem] font-bold">About</h1>
        <div className="text-[9.25px] md:text-[1rem] flex flex-col gap-2">
          <p>Our History</p>
          <p>Our Services</p>
          <p>Our Founder</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[1rem] md:text-[1.71rem] font-bold">Resources</h1>
        <div className="text-[9.25px] md:text-[1rem] flex flex-col gap-2">
          <p>Blog</p>
          <p>Online Privacy</p>
          <p>Financial Security</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[1rem] md:text-[1.71rem] font-bold">Help</h1>
        <div className="text-[9.25px] md:text-[1rem] flex flex-col gap-2">
          <p>Help Center</p>
          <p>Refunds and Returns</p>
          <p>Affiliate Program</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
