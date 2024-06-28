
import React, { useContext, useState } from 'react';
import axios from "axios";
import "./Products.module.css";
import { useQuery } from "react-query";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { CartContext } from './../../Context/CartContext';
import { toast } from 'react-toastify';

export default function Products({ limit }) {
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

  function GetFeaturedProducts() {
    return axios.get(
      `https://e-commerce-api-v1-cdk5.onrender.com/api/v1/products/?page=1&limit=315`
    );
  }

  let { data, isLoading, isError, isFetching } = useQuery(
    "featuredProducts",
    GetFeaturedProducts,
    { cacheTime: 30000 }
  );

  const [showAll, setShowAll] = useState(false);

  // Define the products to display based on the limit
  const productsToDisplay = showAll
    ? data?.data?.data
    : data?.data.data.slice(0, limit);

    return (
      <>
        <div className="container ">
          {isLoading ? (
            <div class="flex items-center justify-center h-screen">
              <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-main animate-spin">
                </div>
              </div>
            </div>
          ) : (
            <div className="container py-2 my-5 ">
              <div className="flex flex-wrap justify-center ">
                {productsToDisplay.map((counter) => {
                  return (
                    <>
                      <div>
                        <div className="group mx-2 px-1 my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transform transition-transform duration-300 hover:translate-y-[-5px]">

                          <Link to={`/ProductDetailes/${counter._id}`}  >

                            <div key={counter._id} className="product">
                              <div className="relative flex h-60 overflow-hidden" href="#">
                                <img className="    " src={counter.imagecover} width={300} height={250} alt={counter.slug} />
                                <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                                  <div className="h-3 w-3 rounded-full border-2 border-white bg-white" />
                                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent" />
                                  <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent" />
                                </div>

                              </div>
                              <div className="mt-4 px-5 pb-5">
                                <h1>
                                  <h5 className="text-xl tracking-tight text-slate-900 text-bold capitalize"> {counter.title?.split(' ').splice(0, 3).join(' ')}</h5>
                                </h1>
                                <h1>
                                  <h5 className="text-md tracking-tight text-gray-500"> {counter.description?.split(' ').splice(0, 4).join(' ')}</h5>
                                </h1>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                  <h5 className='capitalize text-bold m-0'>
                                    category :
                                    {counter.category?.name}
                                  </h5>
                                  <p>
                                    <span className="text-3xl font-bold text-slate-900">{counter.price}$</span>

                                  </p>

                                </div>
                              </div>

                            </div>
                          </Link>

                          <button onClick={() => addCartItem(counter._id)} className="flex items-center justify-center bg-socMain px-2 py-2 text-sm text-white transition hover:bg-main">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            Add to cart
                          </button>
                        </div>

                      </div>
                      


                    </>




                  );
                })}
              </div>
             

            </div>
          )}

        </div>


      </>
    );
}


