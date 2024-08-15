import React from 'react'
import { db, storage} from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


function Form(props) {
     async function handelsubmit(e) {
    e.preventDefault();

    let file = e.target.file.files;

    let fileURL="no data";
      
     if(file[0]){
 
      const storageRef = ref(storage, `files/${file[0].name}`);
        await uploadBytes(storageRef, file);
          fileURL = await getDownloadURL(storageRef);
   
      }
    


    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      text: e.target.text.value,
      file:fileURL
    };

    try {

      await addDoc(collection(db,"form"), data);

      alert("form is sended")
      
    } catch (error) {
      
      console.log(error)
    }

   

  }
  return (
    <div className='grid-form formbox white-bg'>

        <div className='formmain1'>
            <h5>have an idea?</h5>
            <h1 className='textani'>{props.titel}</h1>
            <h5><a href="mailto:webgennsolutions@gmail.com" className='text-decoration-none text-white'>webgennsolutions@gmail.com</a></h5>
        </div>

        <div className='formmain2'>
            <form onSubmit={handelsubmit}>
                <div className='inputdiv'>
                  <input type="text" name='name' placeholder='Your Name' required/>
                  <input type="email" name='email' placeholder="Your Email" required/>
                </div>
                <textarea name="text" placeholder='tell us about your project' required></textarea>

                <span className='formspan'>

                <label for="file">Attach file</label>
                        <input type="file" name="file" multiple placeholder='Attach file ' id='file'/>
                </span>

                <input type="submit" value="submit" className='formsubmit' />
            </form>
        </div>

    </div>
  )
}

export default Form