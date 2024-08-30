import { Link } from "react-router-dom";
import { websiteData } from "../lib";
import { useState } from "react";
import Nav from "./nav";



function Website() {


  let [mshow,setmshow]=useState(false);

    return (
      <div className="p-body">
        <Nav/>
     <h1 className="p-h">Website</h1>

     <div className="main-xyz">
          <div className="menu-des" onClick={()=>setmshow(!mshow)}>
            <span>Type: Website</span> <span className={`image-arrow ${mshow ? 'active' : '' }`}>
              <img src="../images/111-1118943_up-arrow-icon-png-up-arrow-symbol-png.png" alt="xyz"/>
            </span>
          </div>
          <div className={`main-menu-div ${mshow ? 'active' : ''}`}>
          <div className='p-links'>
            <ul>
                <li className="li"><Link to={'/All'}>All Projects</Link> </li>
                <li id="li"><Link to={'/Website'}> Website</Link></li>
                <li ><Link to={'/webapp'}> Web app</Link></li>
                <li ><Link to={'/Branding'}>Branding</Link> </li>
                <li><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
          </div>
        </div>

        <div className='p-links p-links-computer'>
            <ul>
                <li><Link to={'/'}>All Projects</Link> </li>
                <li className="li1"><Link to={'/Website'}> Website</Link></li>
                <li><Link to={'/webapp'}> Web app</Link></li>
                <li><Link to={'/Branding'}>Branding</Link> </li>
                <li><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
        <hr className="hrr" />

        {
          websiteData.map((elem,i)=>{
            return(
            <CardDesignWE elem={elem} key={i}/>
            );
          })
        }
       
      </div>
    );
  }
  
  export default Website;

  function CardDesignWE({elem}) {
    return(
      <div className="p-Card">
      <div className="img">
        <img src={elem.src} alt="xyz"/>
      </div>
      <div className="p-card-text">
      <p>{elem.p}</p>
      <div className="button"><button>See Case</button></div> </div>
      <button>FinTech</button>
      <button>{elem.btn2}</button>
      <p> {elem.p2} </p>
    </div>
    )
  }