import React from 'react'
import ReactDOM from "react-dom/client"
import "./App.css"
import Header from "./components/Navbar/Navbar"
import Body from './components/Body'
import About from './components/NavComponents/About'
import Recommended from './components/NavComponents/Recommended'
import Error from './components/Error'
import Fav from './components/NavComponents/fav'
import Contact from './components/NavComponents/Contact'
import Cart from './components/NavComponents/Cart'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ! EP 7 (2Half)
// $ 48-) Fixing API link issues (# EP 6.1) ( Body.js & constant.js )
// $ 49) Creating restaurantMenu for every Restaurant in body ( RestaurantMenu.js )
// $ 50) Adding Link to each restaurant ( Body.js )
// $ 51) Fetching only valid restaurants & increasing the number of restaurants listed on our site ( Body.js )
   const AppLayout = () => {
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
        )
   };

   const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element: <Body />
        },
        {
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
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
    ],
    errorElement:<Error/>,
   },
   ]);
   const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)
