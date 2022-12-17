import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    }
])