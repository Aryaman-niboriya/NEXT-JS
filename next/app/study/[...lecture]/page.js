"use client"
import { use } from "react";

export default function lecture({params}){
    const resolvedParams = use(params);
    console.log(resolvedParams);
    return(
        <div>
            <h1>{resolvedParams.lecture[0]}</h1>
            <h1>{resolvedParams.lecture[1]}</h1>
             <h1>{resolvedParams.lecture[2]}</h1>
            <h1>{resolvedParams.lecture[3]}</h1>
             <h1>{resolvedParams.lecture[4]}</h1>
            <h1>{resolvedParams.lecture[5]}</h1>
            </div>
    )

}