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
import Cart from "@/pages/Cart";
import Layout from "@/component/Layout";
import CustomerProfilePage from "@/pages/CustomerProfilePage";
import OrderHistory from "@/pages/OrderHistory";
import VendorLayout from "@/component/VendorLayout";
import MenuItems from "@/pages/MenuItems";
import Orders from "@/pages/Orders";
import VendorProfile from "@/pages/VendorProfile";
import Header from "@/component/Header";

const Element = () => {
    
    const routes = useRoutes([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "*",
            element: <Notfound />
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

            element: <Layout> <CustomerDashboard/> </Layout> 
        },
        {
            path: "/customer-view/cart",
            element: <>
             <Header/>
             <Cart/>
            </>  
        },
        {
            path: "/customer-view/profile",
            element: <Layout> <CustomerProfilePage/> </Layout>
        },
        {
            path: "/customer-view/order-history",
            element: <Layout> <OrderHistory/> </Layout>
        },
        {
            path: "/customer-view/vendor/:id",
            element:<>  
            <Header/>
            <SingleVendorPage/>
             </> 
        },
        {
            path: "/customer-view/vendor/:id/item/:item_id",
            element: <SingleMenuItem/>
        },
        {
            path: "/vendor-view",
            element:<VendorLayout> <VendorDashboard/> </VendorLayout> 
        },

        {
            path: "/vendor-view/profile",
            element:<VendorLayout> <VendorProfile/> </VendorLayout> 
        },
        {
            path: "/vendor-view/menu-items",
            element:<VendorLayout> <MenuItems/> </VendorLayout> 
        },
        {
            path: "/vendor-view/orders",
            element:<VendorLayout> <Orders/> </VendorLayout> 
        },

    ])

    
    return routes
}

export default Element