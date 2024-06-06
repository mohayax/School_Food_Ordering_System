import { useRoutes } from "react-router-dom";
import Signup from "../pages/Signup";
import Notfound from "../pages/Notfound";
import Login from "@/pages/Login";
import CustomerDashboard from "@/pages/CustomerDashboard";
import VendorProfileForm from "@/pages/VendorProfileForm";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import CustomerProfileForm from "@/pages/CustomerProfileForm";
import ProtectedRoute from "./ProtectedRoute";
import VendorDashboard from "@/pages/VendorDashboard";
import SingleVendorPage from "@/pages/SingleVendorPage";
import SingleMenuItem from "@/pages/SingleMenuItem";


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
            path: "/forgot-password",
            element: <ForgotPassword/>
        },
        {
            path: "/reset-password",
            element: <ResetPassword/>
        },
        {
            path: "/create-customer-profile",
            element: <CustomerProfileForm/>
        },
        {
            path: "/create-vendor-profile",
            element: <VendorProfileForm/>
        },
        {
            path: "/customer-view",
            element: <CustomerDashboard/>,
            children: [
                {
                    path: "/vendor/:id",
                    element: <SingleVendorPage/>,
                    children: [
                        {
                            path: "/item/:item_id",
                            element: <SingleMenuItem/>
                        },
                    ]
                },
                
            ]
        },
        {
            path: "/vendor-view",
            element: <VendorDashboard/>
        },

    ])

    
    return routes
}

export default Element