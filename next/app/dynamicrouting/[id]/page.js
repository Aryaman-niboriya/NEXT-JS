export default async function id({params}){
    const {id} = await params

    return(
        <div>
            <h1>this is the id page number is {id} </h1>
        </div>
    )

}