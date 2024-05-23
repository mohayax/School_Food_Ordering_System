import { useRoutes } from "react-router-dom";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";



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
    ])

    
    return routes
}

export default Element