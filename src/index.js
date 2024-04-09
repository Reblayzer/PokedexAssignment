import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom";
import './index.css';
import App from './pages/App';
import Pokedex from "./pages/pokedex/Pokedex";
import About from "./pages/about/About";

const router = createHashRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path:"/",
                element: <Pokedex />,
            },
            {
                path:"/about",
                element: <About />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
