import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../payes/Home/home/Home";
import Colleges from "../payes/colleges/Colleges";
import Admission from "../payes/admission/Admission";
import MyCollege from "../payes/myCollege/MyCollege";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'colleges',
                element:<Colleges></Colleges>
            },
            {
                path:'admission',
                element: <Admission></Admission>
            },
            {
                path:'myCollege',
                element: <MyCollege></MyCollege>
            }
        ]
    }
])
export default router;