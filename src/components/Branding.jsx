import { Link } from "react-router-dom";
import { Brand } from "../lib";
import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
function Branding() {
  let [mshow,setmshow]=useState(false);

    return (
      <div className="p-body">

        <Nav/>

     <h1 className="p-h">Branding</h1>

     <div className="main-xyz">
          <div className="menu-des" onClick={()=>setmshow(!mshow)}>
            <span>Type: Branding</span> <span className={`image-arrow ${mshow ? 'active' : '' }`}>
              <img src="../images/111-1118943_up-arrow-icon-png-up-arrow-symbol-png.png" alt="xyz"/>
            </span>
          </div>
          <div className={`main-menu-div ${mshow ? 'active' : ''}`}>
          <div className='p-links'>
            <ul>
                <li><Link to={'/Projects'}>All Projects</Link> </li>
                <li><Link to={'/Website'}> Website</Link></li>
                <li ><Link to={'/webapp'}> Web app</Link></li>
                <li id="li"><Link to={'/Branding'}>Branding</Link> </li>
                <li><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
          </div>
        </div>

        <div className='p-links p-links-computer'>
            <ul>
                <li ><Link to={'/Projects'}>All Projects</Link> </li>
                <li ><Link to={'/Website'}> Website</Link></li>
                <li ><Link to={'/webapp'}> Web app</Link></li>
                <li className="li1"><Link to={'/Branding'}>Branding</Link> </li>
                <li ><Link to={'/Mobile'}> Mobile app</Link></li>
            </ul>
        </div>
        <hr className="hrr" />

        <div className="center-div">
          {
          Brand.map((data,i)=>{
           return(
            <BrandData data={data} key={i} />
           )
          })
        }
        </div>
       
        

      <Footer/>
      </div>
    );
  }
  
  export default Branding;
  

  function BrandData({data}){
    return(
      <div className="p-Card">
          <div className="img">
           <img src= {data.src} alt="xyz"/>
          </div>
          <div className="p-card-text">
          <p>{data.p}</p>
          <div className="button center-div"><button>See Case</button></div> </div>
          <button>FinTech</button>
          <button>Branding</button>
          <p>{data.p2}</p>
        </div>
    );
  }