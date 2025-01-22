import {createBrowserRouter} from "react-router-dom";
import {Posts} from "../components/Posts/Posts.tsx";
import {Users} from "../components/Users/Users.tsx";

export const HOME = "/";
export const POSTS = "posts/:userId";

export const router = createBrowserRouter([
    {
        path: HOME,
        element: <Users/>,
    },
    {
        path: POSTS,
        element: <Posts />,
    }
])