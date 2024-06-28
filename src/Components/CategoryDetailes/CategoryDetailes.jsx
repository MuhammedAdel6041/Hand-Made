import { useParams } from 'react-router-dom'
import './CategoryDetailes.module.css'
import { useQuery } from 'react-query'
import axios from 'axios'
// import img1 from "../../assets/images/product(3).jpg"


export default function CategoryDetailes() {
  let prams = useParams()
  function spescficProduct() {
    return axios.get(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/categories/?page=1&limit=315/${prams.id}`)

  }
  let { data, isLoading } = useQuery("getSpescficProduct", spescficProduct, { cacheTime: 0, })
  let showdata = data?.data?.data
  console.log(showdata);

  return <>


    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {isLoading ? <>

        <div className="flex"></div>

        <div className=" flex justify-center items-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-main animate-spin">
            </div>
          </div>
        </div>
      </> :
        <>

          {showdata.map((counter) => {
            return <>

              <div className="w-72 bg-white  flex justify-center shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div className="content">
                  <img src={counter.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">{counter.slug}</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{counter.name}</p>

                  </div>
                </div>

              </div>

            </>
          })}








        </>




      }


    </section>


  </>

}
