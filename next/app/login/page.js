'use client';
import { useRouter} from "next/navigation";

function login (){
    const router=useRouter();
    return(
        <div>
            <h1>Login page huu dlle</h1>
            <button onClick={()=>{router.push("/login/loginstudent")}}>go Login student page</button>
        </div>
    )
}

export default login;