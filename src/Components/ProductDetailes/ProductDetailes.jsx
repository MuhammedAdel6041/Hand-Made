import './ProductDetailes.module.css'
import 'swiper/css';
import img1 from "../../assets/images/product(2).jpg"
import { Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { MdFavoriteBorder } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Divider, Button } from "@nextui-org/react";
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import user from "../../assets/images/user.jpg";
import ReviewSection from './../ReviewSection/ReviewSection';

export default function ProductDetailes() {
  let { addToCart } = useContext(CartContext)

  async function addCartItem(id) {
    let response = await addToCart(id)
    console.log("cart item");
    toast.success('Product Added Successfully!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(response);
  }

  let prams = useParams()

  function spescficProduct() {
    return axios.get(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/products/${prams.id}`)

  }
  let { data, isLoading, isError } = useQuery("getSpescficProduct", spescficProduct, { cacheTime: 0, })
  let product = data?.data?.data
  console.log(product);

  return <>

    {isLoading ? <div class="flex items-center justify-center h-screen">
      <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-main animate-spin">
        </div>
      </div>
    </div> :

      < >
        {product ? <div key={product.id} className=' '>

          <div className="container  p-28 flex justify-evenly  ">
            <div className="slider w-1/4     ">


              <Swiper pagination={true} modules={[Pagination]} className="mySwiper text-main">
                <SwiperSlide >
                  <div className="cursor-pointer"  >
                    <img className="w-full h-96 rounded-xl" src={img1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="cursor-pointer"  >
                    <img className="w-full h-96 rounded-xl" src={img1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="cursor-pointer"  >
                    <img className="w-full h-96 rounded-xl" src={img1} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="left  w-full  mx-7 ">
              <div className="header   p-2  ">
                <h1 className=' text-3xl capitalize font-main  my-2 '>
                  {product.title}


                </h1>
                <div className="rate flex gap-1   items-center  ">
                  <FaStar className='text-rate' />
                  <FaStar className='text-rate' />
                  <FaStar className='text-rate' />
                  <FaStar className='text-rate' />

                  <h6 className='text-black text-lg font-main mx-2'>4 reviews</h6>
                  <Divider orientation="vertical" className='bg-black rounded-xl   mx-1 h-5 w-1' />

                  {(product.quantity > 0) ? <span
                    class=" whitespace-nowrap rounded-full   px-2 py-1 text-center align-baseline text-[1em] font-bold   bg-green-700 capitalize  text-white mx-3">
                    in stock
                  </span> : <span
                    class=" whitespace-nowrap rounded-full   px-2 py-1 text-center align-baseline text-[1em] font-bold   bg-red-700 capitalize  text-white mx-3">
                    out stock
                  </span>}
                </div>
                <div className="price font-main    text-2xl text-main my-2">
                  <span className='capitalize me-2 text-gray-600'>Price :</span>
                  ${product.price}
                </div>
              </div>
              <Divider className="my-1 bg-gray-300" />
              <div className="description font-main  my-5  p-2 capitalize text-gray-600">
                <span className='capitalize me-2 text-gray-600 font-bold'>Description :</span>
                {product.description}
              </div>
              <Divider className="my-1 bg-gray-300" />

              <div className="group flex gap-5  my-5   items-center">
                <Button onClick={() => addCartItem(product._id)} color="success" className='w-1/2 p-5  rounded-lg  capitalize   text-md font-main ' endContent={<HiOutlineShoppingBag />}>
                  add to cart
                </Button>
                <Button onClick={() => addCartItem(product._id)} color="danger" className='w-1/2 p-5  rounded-lg  capitalize   text-md font-main ' endContent={<MdFavoriteBorder />}>
                  add to  WishList
                </Button>


              </div>
              <Divider className="my-1 bg-gray-300" />
              <div className="categories my-5">
                <h1 className=' text-md font-main font-bold capitalize text-gray-800'>
                  categories : <span className='text-md font-main capitalize text-gray-400'>
                    {product.category ? product.category.name : "N/A"}
                  </span>
                </h1>
                <h1 className=' text-md font-main font-bold capitalize text-gray-800'>
                  tag : <span className='text-md font-main capitalize text-gray-400'>
                    {product?.slug || 'Not Found'}
                  </span>
                </h1>
              </div>

            </div>

          </div>

        </div>



          : ""}

     <ReviewSection/>
      </ >

    }




  </>

}




