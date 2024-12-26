import { useRouteError } from "react-router-dom"

const Error=()=>{

    const err=useRouteError()
    console.log(err)
    return(

        <div>
            <h2>oops..!!!!!</h2>
            <h3>something went wrong....😒😒😒😒</h3>
            <h2>{err.statusText},{err.status}</h2>
        </div>
    )
}


export default Error