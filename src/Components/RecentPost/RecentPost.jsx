import './RecentPost.module.css'



export default function RecentPost() {
  return <>

    <section className="bg-white py-6 sm:py-8 lg:py-12 my-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-main md:mb-6 lg:text-4xl">Most Recent Posts</h2>
          <p className="mx-auto max-w-screen-md text-center text-black text-bold md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
        </div>
        {/* /Heading */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <a href="#" className="transition duration-100 hover:text-main ">The Pines and the Mountains</a>
              </h2>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
              <div>
                <a href="#" className="font-semibold text-socMain cursor-pointer transition duration-100 hover:text-main ">Read more</a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <a href="#" className="transition duration-100 hover:text-main ">The Coding Mania</a>
              </h2>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
              <div>
                <a href="#" className="font-semibold text-socMain cursor-pointer transition duration-100 hover:text-main ">Read more</a>
              </div>
            </div>
          </article>
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <a href="#" className="transition duration-100 hover:text-main ">Architectural Warfare</a>
              </h2>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
              <div>
                <a href="#" className="font-semibold text-socMain cursor-pointer transition duration-100 hover:text-main ">Read more</a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <a href="#" className="transition duration-100 hover:text-main ">Blues in Architechture</a>
              </h2>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>
              <div>
                <a href="#" className="font-semibold text-socMain cursor-pointer transition duration-100 hover:text-main ">Read more</a>
              </div>
            </div>
          </article>
          {/* /Article */}
        </div>
      </div>
    </section>


  </>

}