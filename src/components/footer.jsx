import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";



function Footer() {
  return (
    <div className='m-3 white-bg'>
      <div className='footer'>

        <div className='imgfooter'>
          <img src="webgenne.jpg" alt="" />
        </div>

        
          <div className='footerinner'>
            <h2>Company</h2>
            <span><Link to={"/"}>home</Link></span>
            <span><Link to={"/Services"}>Services</Link></span>
            <span><Link to={"/company"}>company</Link></span>
            <span><Link to={"/Projects"}>Projects</Link></span>
          </div>

          <div className='footerinner'>
            <h1>Socials</h1>
            <span><BiLogoFacebookSquare /> <a href="https://www.facebook.com/share/YJYEgnsNvjVYo1Bt/?mibextid=qi2Omg">facebook</a></span>
            <span><FaInstagram /> <a href="https://www.instagram.com/webgennsolutions/">instagram</a></span>
            <span><FaLinkedin /> <a href='https://www.instagram.com/webgennsolutions/'>LinkedIn</a></span>
            <span><FaSquareXTwitter /> <a href="https://x.com/WebGennsolution?t=1F05YBNe2WISm9gujsWOBQ&s=09">Twitter</a></span>
          </div>
      
      </div>
      <div className='footerinner2'>
        <span>
         <h4>Email us</h4>
         <TbMail /> <a href='mailto:webgennsolutions@gmail.com' className='text-decoration-none text-white'>webgennsolutions@gmail.com</a>
       </span>

       <span>
        <h4>Call us on</h4>
        <p>+916877386378</p>
        
       </span>
      </div>

    </div>
  )
}

export default Footer
