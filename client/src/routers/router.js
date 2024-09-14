import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Layout from "../components/Layout"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import ViewDetailGame from "../pages/ViewDetailGame"
import Store from "../pages/Store"
import Profile from "../pages/Profile"
import DashBoard from "../pages/DashBoard"
import ViewAllUsers from "../pages/admin/Users/ViewAllUser"
import ViewAllGames from "../pages/admin/Games/ViewAllGames"
import CreateNewUser from "../pages/admin/Users/CreateNewUser"
import CreateNewGame from "../pages/admin/Games/CreateNewGame"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path:"sign-in", element: <SignIn />},
            {path:"sign-up", element: <SignUp />},
            {path:"view-detail-game/:id", element: <ViewDetailGame />},
            {path:"store", element: <Store />},
            {path:"store/search/query=?", element: <Store />},
            {path:"profile", element: <Profile />},
            {path:"admin/dash-board", element: <DashBoard />},
            {path:"admin/view-all-users", element: <ViewAllUsers />},
            {path:"admin/view-all-games", element: <ViewAllGames />},
            {path:"admin/create-new-user", element: <CreateNewUser />},
            {path:"admin/create-new-game", element: <CreateNewGame />},
        ]
    }
])

export default router