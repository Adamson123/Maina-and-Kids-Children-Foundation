import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "@fontsource/kumbh-sans";
import Root from "./layout/Root";
import { base } from "./data/basename";

// Direct imports (no lazy)
import Homepage from "./pages/Homepage";
import GirlChild from "./pages/girlchild/GirlChild";
import AboutUs from "./pages/about/AboutUs";
import Projects from "./pages/projects/Projects";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/girl-child" element={<GirlChild />} />
            <Route path="/projects" element={<Projects />} />
        </Route>
    ),
    { basename: base.basename }
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
