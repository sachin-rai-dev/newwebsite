import React from 'react'

function Homesc() {
  return (
    <div className='row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 homesc white-bg '>
        <div className="col container homesc1">
             <img src='Cover-all-cases.png' className='homescimg img-fluid' alt='none'></img>
             <div className='p-5  homescgap '>
                <h1>UVER – Promo website for mobile application</h1>
                <div className='gaphomesc'><span> Education </span><span> Website </span></div>
                 <h5>A digital touchpoint to introduce a modern university search app</h5>    
              </div>
        </div>

        <div className="col container homesc1">
            <img src='Cover-all-cases-2.png.webp' className='homescimg img-fluid' alt='none'></img>
            <div className='p-5 homescgap'>
              <h1>E-manager – mobile app for e-sim management</h1>
              <div className='gaphomesc'><span> Smart solution </span><span>Mobile app</span></div>
              <h5>E-manager is a mobile application for managing and controlling e-Sim cards for travelers</h5>
            </div>
         </div>

        <div className="col container homesc1">
           <img src='Cover-all-cases-3.png.webp' className='homescimg img-fluid' alt='none'></img>
           <div className='p-5 homescgap'>
              <h1>Easily – Promo website for the super app</h1>
              <div className='gaphomesc'><span> FinTech </span> <span> Website</span></div>
              <h5>Captivating Promo Site for the web super app</h5>        
           </div>
        </div>

        <div className="col container homesc1">
           <img src='Cover-mobile-3.png.webp' className='homescimg img-fluid' alt='none'></img>
           <div className='p-5 homescgap'>
              <h1>CoinTax – crypto tax reporting tool</h1>
              <div className='gaphomesc'><span> Saas </span> <span> Web app</span></div>
               <h5>Unleash the crypto tax revolution</h5>
           </div>
        </div>

        
    </div>
  )
}

export default Homesc