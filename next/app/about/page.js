'use client';
import Link from "next/link"
import {useRouter} from "next/navigation"
function about(){
    const router = useRouter();
    return(
        <div>
            <h1>me about hun reee</h1>
            <button onClick={()=>{router.push(login)}}>button for login page</button>
            <Link href="login">login</Link>
        </div>
    )
}
export default about;