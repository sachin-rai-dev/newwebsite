import React, { useEffect, useState } from "react";

function Homesa() {
  useEffect(() => {
    let viewportWidth = window.innerWidth;

    if (viewportWidth <= 820) {
      setimg(true);
    }
  }, []);

  let [img, setimg] = useState(false);

  return (
    <div className="homesa1">
      <h1 className="animatiin">
        Crafting Cutting-Edge Web ,
        <span className="text-orange"> Solutions for </span>
        <span className="text-orange"> Tomorrow's </span>
        Businesses
      </h1>

      <div className="homesa2">
        <img
          src="3d-business-woman-and-man-discussing-work-project.png"
          alt="none"
        />
      </div>
      { img ?
      <div className="homesa3">
        <img src="/home-sa-img.png" alt="none" className="video" />
      </div>
          :
      <div className="homesa3">
        <video className="video" autoPlay muted loop>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      }
    </div>
  );
}

export default Homesa;
