async function productlist(){
    let data=await fetch("https://dummyjson.com/products");
    data=await data.json();
    //console.log(data);
    return data.products;
}

export default async function server(){
    let product =await productlist();
    console.log(product);
    return(
        <div>
           <h1>content api</h1>
           {
                product.map((item)=>{
                    return <h2 key={item.id}>{item.title}</h2>
                })
            }
            <button onClick={()=>{alert("Button clicked!!!")}}>Button</button>
            

        </div>
    )

}