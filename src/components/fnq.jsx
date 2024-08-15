import { useState } from "react";
import {question} from "../lib"


export default function Fnq() {
   let [show,getshow]=useState(question[0].id);
   return (
 
       <div className="white-bg fnqmain">
   <h1 className='title'>Still, Have Questions In Your Mind?</h1>
     <div className='faqouter'>
       {question.map((faqit,i)=>{
         return(
           <div className='faqitems'>
           <h2 onClick={()=>getshow(faqit.id)}> {faqit.question} 
             <span className={show === faqit.id ? 'active' : ''}>{">"}</span> </h2>
           <p className={show === faqit.id ? 'faqshow' : ''}> {faqit.ans}</p>
         </div>
         );
       })}
     </div>
 </div>
     
   )
 }