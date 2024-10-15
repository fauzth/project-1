import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ExternalPosts from "../components/externalPost";

const router = createBrowserRouter ([
    {
        path : "/",
        element : <App />
    },
    {
        path : "/externalpost",
        element : <ExternalPosts />
    }
])

export default router;


