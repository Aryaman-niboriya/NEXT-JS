"use client"
import {useState, useEffect} from "react"
export default function Page (){
    const [product,setproduct]=useState([]);
    useEffect(()=>{
        async function fetchProducts(){
            let data=await fetch("https://dummyjson.com/products");
            data=await data.json();
            console.log(data);
            setproduct(data.products)
        }

        fetchProducts()
    },[])

    return(
        <div>
            <h1>content api</h1>
            {
                product.map((item)=>{
                    return <h2 key={item.id}>{item.title}</h2>
                })
            }
            <button onClick={()=>{alert("Button clicked.........")}}>button</button>
        </div>
    )
}