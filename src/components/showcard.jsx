import React from "react";

function Showcard(props) {
  let {h1,h3,src}=props.carddata;
  return (
    <div className="servisescard py-4">
      <img src={src} alt="" height={"90px"} width={"90px"} />
      <h2>{h1}</h2>
      <p>{h3}</p>
    </div>
  );
}

export default Showcard;
