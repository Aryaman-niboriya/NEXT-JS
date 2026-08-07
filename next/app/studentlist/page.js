"use client"
import Link from "next/link";
export default function StudentList(){
    return (
        <div>
        <h1>student list</h1>
        <ul>
           <li><Link href="/studentlist/abhay">abhay</Link></li>
           <li><Link href="/studentlist/adi">adi</Link></li>
           <li><Link href="studentlist/akansha">akansha</Link></li>
           <li><Link href="studentlist/aashi">aashi</Link></li>
        </ul>
        </div>
    )
}