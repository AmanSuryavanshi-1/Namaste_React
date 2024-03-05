import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import RestaurantCard from './components/RestaurantCard'
import Body from './components/Body'
import About from './components/NavComponents/About'
import Recommended from './components/NavComponents/Recommended'
import Error from './components/Error'
import Fav from './components/NavComponents/fav'
import Contact from './components/NavComponents/Contact'
import Cart from './components/NavComponents/Cart'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// ! EP7
// $ 62) useEffect in detail from React IMP Topics Notes (YT) -> IMP Topics -> 12) useEffect
// $ 63) useState in detail React IMP Topics Notes (YT) -> IMP Topics -> 13) useState
// $ 64) React Router DOM  (App.js)
// $ 65) Types of Routing   (Notes.jsx)

   const AppLayout = () => {
    return (
    <div className="app">
        <Header/>

        {/* <About
        // => 64.2) creating children routes
        // --> When i am on /about i want about page to be loaded
        // --> & when i am on /body the body page must get loaded
        // --> To create the functionality we will create children routes in path = "/".
        // --> This path :"/" will remain as it is and the children routes will get added to it
        // --> Children routes are the list of paths
        /> */}

        <Outlet
        // => 64.3) Outlet component of react router dom
        // --> This outlet component is provided by react-router-dom to render the children components inside it.
        // --> Outlet acts as a tunnel from which every children component is provided to the place of outlet.
        />
    </div>
        )
   };

// $ 64) using React Router DOM creating About page
// => 64.1) a) Creating the configuration:-
// ->  64.1.1) Importing createBrowserRouter from React Router DOM
//             -> createBrowserRouter takes a list of objects
//             -> Each and every object defines a separate path and tells what should happen on that particular path.

   const appRouter = createBrowserRouter([
    {
// -> If the path is / load home layout
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element: <Body />
        },
        {
        // -> If the path is /about load About section
            path:"/about",
            element:<About/>,
        },
        {
            path:"/recommended",
            element:<Recommended/>,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/fav",
            element:<Fav/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ],
    errorElement:<Error/>,
// => 64.1.2) We can also add an error element to show the coustomized error pages.
   },
   ]);
// ->  64.1.3) RouterProvider => We need to provide the above information in order to render it.
//             -> It is done using a React Router DOM component RouterProvider
//             -> This router provider will provide the configuration to our app.
   const root = ReactDOM.createRoot(document.getElementById("root"));
// earlier we are rendering AppLayout directly
//    root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>)
