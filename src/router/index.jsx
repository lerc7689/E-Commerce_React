import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Purchases from "../pages/Purchases/Purchases";
import Profile from "../pages/Profile/Profile";
import ProtectedRoute from "../components/Common/ProtectedRoute/ProtectedRoute";
import ProductId from "../pages/ProductId/ProductId";
import NotFound from "../pages/NotFound/NotFound";
import CartModal from "../components/CartModal/CartModal";

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/product/:id",
                element:<ProductId/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/profile",
                element:(
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                )
            },
            {
                path:"/purchases",
                element:(
                    <ProtectedRoute>
                        <Purchases/>
                    </ProtectedRoute>
                )
            },

        ]
    },
    {
        path:"*",
        element:<NotFound/>
    }

])

export default router;