import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
// import App from "../App";
// import ExternalPosts from "../components/externalPost";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";

const router = createBrowserRouter ([
    // {
    //     path : "/",
    //     element : <App />
    // },
    // {
    //     path : "/externalpost",
    //     element : <ExternalPosts />
    // }
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path : "/",
                element : <HomePage />
            },
            {
                path : "/about",
                element : <AboutPage />
            }
        ]
    }


])

export default router;


