import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { NextUIProvider } from "@nextui-org/react";
import Singup from './Components/Singup/Singup';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';
import ProductDetailes from './Components/ProductDetailes/ProductDetailes';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider, { userContext } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CartContextProvider from './Context/CartContext';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CategoryDetailes from './Components/CategoryDetailes/CategoryDetailes';

const router = createHashRouter([
  {
    path: "", element: <Layout />, children: [
      { path: "/login", element: <Login /> },
      { path: "/singUp", element: <Singup /> },
      { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: "/Brand", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "/Products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "/AboutUs", element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: "/ContactUs", element: <ProtectedRoute><Contact /></ProtectedRoute> },
      { path: "/Categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: "/Profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "/Cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "/forgetpassword", element:  <ForgetPassword />  },
      { path: "/ProductDetailes/:id", element: <ProtectedRoute><ProductDetailes /></ProtectedRoute> },
      { path: "/CategoryDetailes/:id", element: <ProtectedRoute><CategoryDetailes /></ProtectedRoute> },
      { path: "*", element: <ProtectedRoute><NotFound /></ProtectedRoute> },
    ]
  }
])
let query = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(

  <NextUIProvider>
    <QueryClientProvider client={query}>
      <CartContextProvider>
        <UserContextProvider>

          <RouterProvider router={router}>
            <App />
          </RouterProvider>


        </UserContextProvider>

      </CartContextProvider>


      <ReactQueryDevtools initialIsOpen="false" position='bottom-right' />
    </QueryClientProvider>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
    <ToastContainer />




  </NextUIProvider>

)

