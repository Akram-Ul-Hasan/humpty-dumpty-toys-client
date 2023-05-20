import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Shared/Blog/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blog',
            element: <Blog></Blog>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'add-toy',
            element: <AddToy></AddToy>
        },
        {
            path: 'all-toys',
            element: <AllToys></AllToys>
        },
        {
            path: 'my-toys',
            element: <MyToys></MyToys>
        },
        {
            path: 'update-toy/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        }
    ]
},
{
    path: '*',
    element: <ErrorPage></ErrorPage>
}
])
export default router;