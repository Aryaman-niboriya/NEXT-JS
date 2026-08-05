'use client';
import Link  from "next/link";
export default function layout({children}){
    return(
        <div>
           <ul>
            <li><Link href={"/contact"}>contact</Link></li>
            <li><Link href={"/contact/contactteacher"}>contactteacher</Link></li>
            <li><Link href={"/contact/contactstudent"}>contactstudent</Link></li>
           </ul>
           <br/>
        <br/>

            {children}

        </div>
    )

}