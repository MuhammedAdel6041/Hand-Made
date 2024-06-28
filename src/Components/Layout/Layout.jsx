import './Layout.module.css'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import ProductDetailes from '../ProductDetailes/ProductDetailes';









export default function Layout() {

  return <>
     
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />

    </div>




  </>

}
