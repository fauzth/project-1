import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/rootLayout";
// import App from "../App";
// import ExternalPosts from "../components/externalPost";
import HomePage from "../pages/homePage";
import BlogPage from "../pages/blogPage";
import SinglePost from "../pages/_id";
import AboutPage from "../pages/aboutPage";
import { posts, postById } from "../apis/loaders";

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
                path : "/blog",
                element : <BlogPage />,
                loader: posts
            },
            {
                path : "/blog/:id",
                element : <SinglePost />,
                loader : postById
            },
            {
                path : "/about",
                element : <AboutPage />
            }
        ]
    }


])

export default router;


