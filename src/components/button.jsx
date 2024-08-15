import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button() {
  let navigater=useNavigate()
  let navigat=()=>{navigater("/Contactus")}
  return (
    <div className='buttondivmain white-bg'>
        <div className='formbutton' onClick={navigat}>
            <h1 className='formbuttonh1'>Get a quots</h1>
            <div className='buttundiv'> </div>
            <h1 className='formbuttonh2'>Talk with us</h1>
        </div>
    </div>
  )
}

export default Button