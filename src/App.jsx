import React, { Suspense, lazy } from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "@fontsource/kumbh-sans";
import Root from "./layout/Root";
import { BiLoaderAlt } from "react-icons/bi";
import { base } from "./data/basename";

// Lazy load pages
const Homepage = lazy(() => import("./pages/Homepage"));
const GirlChild = lazy(() => import("./pages/GirlChild"));
const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Projects = lazy(() => import("./pages/projects/Projects"));

const LoadingScreen = () => {
    return (
        <div className="min-h-screen min-w-full flex items-center justify-center">
            <BiLoaderAlt className="h-10 w-10 animate-spin fill-primary-blue" />
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route
                index
                element={
                    <Suspense fallback={<LoadingScreen />}>
                        <Homepage />
                    </Suspense>
                }
            />
            <Route
                path="/about"
                element={
                    <Suspense fallback={<LoadingScreen />}>
                        <AboutUs />
                    </Suspense>
                }
            />
            <Route
                path="/girl-child"
                element={
                    <Suspense fallback={<LoadingScreen />}>
                        <GirlChild />
                    </Suspense>
                }
            />
            <Route
                path="/projects"
                element={
                    <Suspense fallback={<LoadingScreen />}>
                        <Projects />
                    </Suspense>
                }
            />
        </Route>
    ),
    { basename: base.basename }
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
