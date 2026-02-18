import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home';
import Rootlayout from './layout/Rootlayout';
import SlingleViewPage from './Components/SlingleViewPage';
import Shop from './page/Shop/Shop';
import ShopCart from './page/Shop/ShopCart';

function App() {
let router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "single-view-page", Component: SlingleViewPage },
      { path: "shop-cart", Component: ShopCart },
      
    ],
  },
]);

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
