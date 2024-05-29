import { useRoutes } from "react-router-dom";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import Login from "@/pages/Login";



const Element = () => {
    
    const routes = useRoutes([
        {
            path: "/",
            element: <Signup />
        },
        {
            path: "*",
            element: <Notfound />
        },
        {
            path: "/login",
            element: <Login/>
        }
    ])

    
    return routes
}

export default Element