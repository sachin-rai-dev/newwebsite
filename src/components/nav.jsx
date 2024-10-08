import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Getform from "./getform";

function Nav() {
  useEffect(() => {
    let viewportWidth = window.innerWidth;

    if (viewportWidth >= 450) {
      setmenustate(false);
    }
  }, []);

  let [getstate, setgetstate] = useState(false);
  let [menustate, setmenustate] = useState(true);
  let menu = useRef();

  useEffect(() => {
    if (!menustate) {
      menu.current.style.transform = `translateX(0%)`;
    } else {
      menu.current.style.transform = `translateX(+100%)`;
    }
  }, [menustate]);

  let navigate = useNavigate();

  let navigat = () => {
    navigate("/");
  };

  
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");


    const handleMouseMove = (e) => {
      console.log(e.y)
      setLeft(`${e.x}px`);
      setTop(`${e.y}px`);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

  
  return (
    <div>
      <div className="mouse" style={{left:left,top:top}}></div>

      <div className="s-nav">
        {/* <img
          src="webgenn.png"
          alt="logo"
          height="50px"
          className="logo"
          onClick={navigat}
        /> */}

        <h1 onClick={navigat}>webgenn<span className="text-orange">.</span></h1>

        <nav ref={menu}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span className="nava ">
              Home
              <span />
            </span>
          </NavLink>

          <NavLink
            to="/Services"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span className="nava">Services</span>
          </NavLink>

          <NavLink
            to="/Company"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span className="nava">Company</span>
          </NavLink>
          <NavLink
            to="/Contactus"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span className="nava">Contact us</span>
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span className="nava">Projects</span>
          </NavLink>
        </nav>
        <span
          className="menubar"
          onClick={() => {
            setmenustate(!menustate);
          }}
        >
          <img src={menustate ? "menubar.svg" : "x.svg"} alt="menu" />
        </span>
        <span
          className="arrow-btn"
          onClick={() => {
            setgetstate(!getstate);
          }}
        >
          Get in touch
        </span>
      </div>
      {getstate ? <Getform /> : ""}
    </div>
  );
}

export default Nav;
