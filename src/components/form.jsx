import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Confetti from "react-confetti";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { TbMail } from "react-icons/tb";

function Form(props) {

  let [width, setwidth] = useState(window.innerWidth);
  let [height, setheight] = useState(window.innerHeight);
  let [confity, setconfity] = useState(false);

  window.addEventListener("resize", function () {
    setwidth(window.innerWidth);
    setheight(height = window.innerHeight);
  });

  async function handelsubmit(e) {
    e.preventDefault();
    setconfity(true);

    let file = e.target.file.files;

    let fileURL = "no data";

    if (file[0]) {
      const storageRef = ref(storage, `files/${file[0].name}`);
      await uploadBytes(storageRef, file[0]);
      fileURL = await getDownloadURL(storageRef);
    }

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
      file: fileURL,
    };

    try {
      await addDoc(collection(db, "form"), data);
     
      setconfity(!confity);
      alert("your form is submited")
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(
    ()=>{setTimeout(() => {
  
    setconfity(false);
   
  }, 10000);},[confity]
)

  return (
    <div className="grid-form formbox white-bg">
      <span className="formmain1h5">
          
      </span>

      <div className="formmain1">
        <h5 >Have an idea?</h5>
        <h1 className="textani">{props.titel}</h1>
        <h5 >
          <a
            href="mailto:webgennsolutions@gmail.com"
            className="text-decoration-none text-white b-hover"
          >
            <TbMail size={26}/> webgennsolutions@gmail.com
          </a>
        </h5>
      </div>

      <div className="formmain2">
        <form onSubmit={handelsubmit}>
          <div className="inputdiv">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="text"
            placeholder="tell us about your project"
            required
          ></textarea>

          <span className="formspan">
            <label for="file">Attach file<span> <IoDocumentAttachOutline /></span></label>
            <input
              type="file"
              name="file"
              multiple
              placeholder="Attach file "
              id="file"
            />
          </span>

          <input type="submit" value="submit" className="formsubmit" />
        </form>
        
      </div>

       
      {confity ? <div className="loder"><Confetti width={width} height={height}/></div>:<p> </p>}
     
    </div>
  );
}

export default Form;
