// Home.jsx
import React from 'react';
import './Home.module.css';


import { FaArrowRight } from "react-icons/fa6";

import MainSlider from '../MainSlider/MainSlider';
import RecentPost from '../RecentPost/RecentPost';
import Products from '../Products/Products'; // Adjust the import path
import { NavLink } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import HeroSection from '../HeroSection/HeroSection';
import Growth from './../Growth/Growth';
import { useContext } from 'react';
import { userContext } from '../../Context/UserContext';

export default function Home() {
  let { userToken } = useContext(userContext);
  return (
    <>
      {userToken ? <>
        <HeroSection />
        <section className="w-screen py-20">
          <h1 className="mb-12 text-center font-sans text-5xl font-bold">Our Blog</h1>
          <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
              </div>
              <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                <div className="flex flex-wrap text-sm text-gray-500">
                  <span className="mr-1">Oct 30, 2022</span>
                  <span className>· 9 min read</span>
                </div>
                <div className="mt-1">
                  <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    3.5K
                  </span>
                </div>
              </div>
            </article>
            <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
              </div>
              <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                <div className="flex flex-wrap text-sm text-gray-500">
                  <span className="mr-1">Oct 30, 2022</span>
                  <span className>· 9 min read</span>
                </div>
                <div className="mt-1">
                  <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    3.5K
                  </span>
                </div>
              </div>
            </article>
            <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://images.unsplash.com/photo-1660548311281-61e57dad92e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="blog" />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
              </div>
              <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                <div className="flex flex-wrap text-sm text-gray-500">
                  <span className="mr-1">Oct 30, 2022</span>
                  <span className>· 9 min read</span>
                </div>
                <div className="mt-1">
                  <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    3.5K
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>



        <div className='my-5'>
          <RecentPost />
        </div>


        {userToken ? <Products limit={8} /> : <>
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
              </div>
            </div>
          </div>


        </>}






        <NavLink to="/Products "    >
          <div class="group w-32 mx-auto flex items-center justify-center rounded-md bg-socMain p-3 text-white transition">
            <span class="group text-sm capitalize flex items-center justify-center rounded py-1 text-center font-bold">view More</span>
            <svg class="ml-2 h-4 w-4 transition-all group-hover:ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>



        </NavLink >
        <Testimonials />
        <Growth />
        <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
          <h2 className="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold text-socMain">Frequently asked Questions</h2>
          <p className="mb-12 text-center text-lg text-black">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
          <ul className="space-y-4">
            <li className="text-left">
              <label htmlFor="accordion-1" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                <input className="peer hidden" type="checkbox" id="accordion-1" defaultChecked />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                  <h3 className="text-sm text-gray-600 lg:text-base">Is there a free trial with Appsy?</h3>
                </div>
                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked: ">
                  <div className="p-5">
                    <p className="text-sm">Lorem ipsum, consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                  </div>
                </div>
              </label>
            </li>
            <li className="text-left">
              <label htmlFor="accordion-2" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                <input className="peer hidden" type="checkbox" id="accordion-2" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                  <h3 className="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
                </div>
                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked: ">
                  <div className="p-5">
                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                  </div>
                </div>
              </label>
            </li>
            <li className="text-left">
              <label htmlFor="accordion-3" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                <input className="peer hidden" type="checkbox" id="accordion-3" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                  <h3 className="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.?</h3>
                </div>
                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked: ">
                  <div className="p-5">
                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                  </div>
                </div>
              </label>
            </li>
            <li className="text-left">
              <label htmlFor="accordion-4" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                <input className="peer hidden" type="checkbox" id="accordion-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                  <h3 className="text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet.?</h3>
                </div>
                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked: ">
                  <div className="p-5">
                    <p className="text-sm">Lorem ipsum, <b>dolor sit amet</b> consectetur adipisicing elit. Adipisci eligendi, recusandae voluptatum distinctio facilis necessitatibus aperiam ut? Dolor mollitia modi aliquam, non sint at reprehenderit commodi dignissimos quo unde asperiores officiis quos laboriosam similique nihil.</p>
                  </div>
                </div>
              </label>
            </li>
          </ul>

        </div>


      </> : <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
          </div>
        </div>

      </>}











    </>


  );
}
