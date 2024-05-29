import { useRoutes } from "react-router-dom";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import Login from "@/pages/Login";
import CustomerDashboard from "@/pages/CustomerDashboard";
import VendorProfileForm from "@/pages/VendorProfileForm";


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
        },
        {
            path: "/customerView",
            element: <CustomerDashboard/>
        },
        {
            path: "/vendorProfileForm",
            element: <VendorProfileForm/>
        }
    ])

    
    return routes
}

export default Element