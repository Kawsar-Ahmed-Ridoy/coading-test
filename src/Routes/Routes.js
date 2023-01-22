import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Results } = require("../Results/Results");


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
                path: '/results',
                element: <Results></Results>
            }
        ]
    }
])

export default router