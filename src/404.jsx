import { useRouteError } from "react-router-dom";
const PageNotFound = () =>{
    const errors = useRouteError();
    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl text-red-500 font-bold">Opps!</h1>
            <p className="py-2">404 | Page Not Found</p>
        </div>
    )
}

export default PageNotFound;