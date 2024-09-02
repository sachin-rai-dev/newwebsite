import { Link } from "react-router-dom";
import { CardData } from "../lib";
import { useState } from "react";



function Allpro() {
let [mshow,setmshow]=useState(false);
  return (
    <div className="p-body">
        
        <h1 className="p-h">Explore <span>our</span> projects</h1>

        <div className="main-xyz">
          <div className="menu-des" onClick={()=>setmshow(!mshow)}>
            <span>Type: All Project</span> <span className={`image-arrow ${mshow ? 'active' : '' }`}>
              <img src="../images/111-1118943_up-arrow-icon-png-up-arrow-symbol-png.png" alt="xyz" />
            </span>
          </div>
          <div className={`main-menu-div ${mshow ? 'active' : ''}`}>
          <div className='p-links'>
            <ul>
                <li id="li"><Link to={'/Projects'}>All Projects</Link> </li>
                <li><Link to={'/Website'}> Website</Link></li>
                <li ><Link to={'/webapp'}> Web app</Link></li>
                <li ><Link to={'/Branding'}>Branding</Link> </li>
                <li><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
          </div>
        </div>
        <div className='p-links p-links-computer'>
            <ul>
                <li className="li1"><Link to={'/Projects'}>All Projects</Link> </li>
                <li><Link to={'/Website'}> Website</Link></li>
                <li ><Link to={'/webapp'}> Web app</Link></li>
                <li ><Link to={'/Branding'}>Branding</Link> </li>
                <li><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
        
        <hr className="hrr" />
         <div className="center-div">
           {CardData.map((elem,i)=>{
          return(
            <CardDesignAj elem={elem} key={i} />
          )
         })}
         </div>
       
               
    </div>
  );
}

export default Allpro;

function CardDesignAj({elem}) {
  return(
    <div className="p-Card">
    <div className="img">
      <img src={elem.src} alt="xyz"/>
    </div>
    <div className="p-card-text">
    <p>{elem.p}</p>
    <div className="button center-div"><button>See Case</button></div> </div>
    <button>FinTech</button>
    <button>{elem.btn2}</button>
    <p> {elem.p2} </p>
  </div>
  )
}