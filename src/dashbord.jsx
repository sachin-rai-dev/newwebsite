import React, { useState } from "react";
import { db, storage } from "./firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Suspense } from "react";
import { deleteObject, ref } from "firebase/storage";

function Dashbord() {
  let [datas, setdata] = useState([]);
  let [loding, setloding] = useState(true);

  useEffect(() => {
    async function datageter() {
      let docs = collection(db, "form");
      let data_from_firebase = await (await getDocs(docs)).docs;

      if (data_from_firebase[0]) {

        let filterdata = data_from_firebase.map((val) => {
          return { ...val.data(), id: val.id };
        });

        setdata(filterdata);
       
      }
    }

    datageter();
  }, [loding]);

  let deletdata = async (id, refs) => {

    await deleteDoc(doc(db, "form", id));

    let charat = "";

    if (refs !== "no data") {
      let count = 0;

      let yu = refs.split("");

      for (const i of yu) {
        if (i === "?") {
          count++;
        }
        if (count > 0 && count <= 1) {
          charat += i;
        }
        if (i === "F") {
          count++;
        }
      }
      console.log(charat)
      let returndata=await deleteObject(ref(storage, `files/${charat}`));
      console.log(returndata)
      setloding(!loding);
    }

    
    setloding(!loding);
  };

  return (
    <div className="dashbord">
      <table>
        <tr>
          <th>No.</th>
          <th>name</th>
          <th>email</th>
          <th>messege</th>
          <th>date</th>
          <th>File</th>
          <th>Delet</th>
        </tr>
        {datas.map((val, i) => {
          return (
            <Suspense
              fallback={
                <div>
                  <h1> Loding... </h1>
                </div>
              }
            >
              <tr key={i}>
                <td>{i}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.text}</td>
                <td>{val.date}</td>
                <td>
                  <a href={val.file}>
                    downlode file{" "}
                    <span>
                      {" "}
                      <FaFileDownload />
                    </span>
                  </a>
                </td>
                <td
                  onClick={() => {
                    deletdata(val.id, val.file);
                    setloding(!loding);
                  }}
                >
                  <MdDelete color="red" size={"25px"} />
                </td>
              </tr>
            </Suspense>
          );
        })}
      </table>
    </div>
  );
}

export default Dashbord;
