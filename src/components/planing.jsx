import React from "react";

function Planing() {
  return (
    <div className="planing-s">

        <h1 className="text-center p-5 heding-black">Our Approach</h1>

      <div className="planing-grid">

      <img src="/arrows.webp" alt="" />

        <div className=" planing-content">
          <h1>Plan</h1>
          <p>Q&A Sessions Requirements Gathering</p>
        </div>

        <div className="planing-right planing-content">
          <h1>Construct</h1>
          <p>Developmental Tasks Software Models Regular Demos</p>
        </div>

        <div className=" planing-content">
          <h1>Design</h1>
          <p>Wireframing UX/UI Prototyping</p>
        </div>

        <div className="planing-right planing-content planing-text">
          <h1>Implement</h1>
        </div>
      

      </div>
    </div>
  );
}

export default Planing;
