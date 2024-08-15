import React from 'react'

function Servisecarddisign(props) {
  return (
    <div className='Servisecarddisign'>
        <h1>{props.data.h1}</h1>
        <img src={props.data.src} alt="" height={"70px"} width={"70px"}/>
        <p>{props.data.para}</p>
    </div>
  )
}

export default Servisecarddisign