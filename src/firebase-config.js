import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:`${process.env.REACT_APP_APIKEY}`,
  authDomain:`${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId:`${process.env.REACT_APP_PROJECTID}`,
  storageBucket:`${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId:`${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId:`${process.env.REACT_APP_APPID}`,
  measurementId:`${process.env.REACT_APP_MEASUREMENTID}`
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export let db = getFirestore(app)
 export const storage = getStorage(app);
 const anylytics=getAnalytics(app)

