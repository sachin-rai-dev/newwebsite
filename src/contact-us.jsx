import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Form from './components/form'

function Contact() {
  return (
    <div className='white-bg'>
      <Nav/>
      <div className='contactus footer white-bg'>

      </div>
      <div className='p-4 slider'>
        
          <span >webgenn in facts and figures</span>
        
      </div>
      <Form titel={"Let’s get in touch"}/>
      <Footer/>
    </div>
  )
}

export default Contact
