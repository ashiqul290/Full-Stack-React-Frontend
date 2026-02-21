import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home';
import Rootlayout from './layout/Rootlayout';
import SlingleViewPage from './Components/SlingleViewPage';
import Shop from './page/Shop/Shop';
import ShopCart from './page/Shop/ShopCart';
import ShopCheckout from './page/Shop/ShopCheckout';
import OrderReceived from './page/Shop/OrderReceived';
import OrderTracking from './page/Shop/OrderTracking';
import Login from './page/auth/Login';
import Register from './page/auth/Register';
import Lookbook from './page/Lookbook';

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
      { path: "shop-checkout", Component: ShopCheckout },
      { path: "shop-confirmation", Component: OrderReceived },
      { path: "order-tracking", Component: OrderTracking }, 
      { path: "lookbook", Component: Lookbook }, 
    ],
  },
  {
    path: "/login",
    Component: Login,
   
  },
  {
    path: "/register",
    Component: Register,
   
  },
]);

  return (
   <>

    <RouterProvider router={router} />
   </>
  )
}

export default App
