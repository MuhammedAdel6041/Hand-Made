import { NavLink } from 'react-router-dom'
import './HeroSection.module.css'



export default function HeroSection() {
  return <>

    <section className="bg-gray-200 dark:bg-gray-200 dark:text-black mb-5  ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">Payments tool for software companies</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          <NavLink to="/Products " >
            <div class="group w-32  flex items-center justify-center rounded-md bg-main p-3 text-white transition">
              <span class="group text-sm capitalize flex items-center justify-center rounded py-1 text-center font-bold">view More</span>
              <svg class="ml-2 h-4 w-4 transition-all group-hover:ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </NavLink>

        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>
      </div>
    </section>

  </>

}
