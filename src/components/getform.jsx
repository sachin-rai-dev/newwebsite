import React from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase-config";

function Getform() {
  async function handelsubmit(e) {
    e.preventDefault();

    let file = e.target.file.files;

    let fileURL = "no data";

    if (file[0]) {
      const storageRef = ref(storage, `files/${file[0].name}`);
      await uploadBytes(storageRef, file);
      fileURL = await getDownloadURL(storageRef);
    }

    let date=new Date().getDate();
    let year=new Date().getFullYear();
    let month=new Date().getMonth();


    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
      file: fileURL,
      date:`${date}/${month}/${year}`
    };

    try {
      await addDoc(collection(db, "form"), data);

      alert("form is sended");
    } catch (error) {
      alert("form is not send");
    }
  }

  return (
    <div className="getmain1">
      <div className="getmain">
        <div className="leftget white-bg">
          <div className="leftgeth">
            Do you need help bringing an idea into fruition?
          </div>
          <div className="leftgetm">webgennsolutions@gmail.com</div>
        </div>

        <div className="rightget white-bg">
          <form className="formget" onSubmit={handelsubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="name plas"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="email plas"
              name="email"
              required
            />
            <textarea
              placeholder="Tell us about your project"
              className="textarea plas"
              minLength={50}
              maxLength={1000}
              name="text"
              required
            ></textarea>

            <span className="formspan">
              <label for="file">Attach file</label>
              <input
                type="file"
                name="file"
                multiple
                placeholder="Attach file "
                id="file"
              />
            </span>

            <p className="formp">
              By clicking Submit, I consent to the cookies policy governing my
              service usage and provided personal data, respectively.
            </p>

            <i>
              <input type="submit" className="submit" />
            </i>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Getform;
