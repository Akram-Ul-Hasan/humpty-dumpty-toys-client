import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Shared/Blog/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


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
        }
    ]
},
{
    path: '*',
    element: <ErrorPage></ErrorPage>
}
])
export default router;