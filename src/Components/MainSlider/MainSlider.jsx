import './MainSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../assets/images/Slider(1).jpg"
import img2 from "../../assets/images/Slider(2).jpg"
import img3 from "../../assets/images/Slider(3).jpg"
export default function MainSlider() {
  return <>
    <Swiper
      // install Swiper modules
      modules={[Pagination]}

      slidesPerView={1}

      pagination={{ clickable: true }}


    >

      <SwiperSlide >
        <div className="cursor-pointer   "  >
          <img className="w-full h-96 rounded-xl" src={img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="cursor-pointer"  >
          <img className="w-full h-96 rounded-xl" src={img2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="cursor-pointer"  >
          <img className="w-full h-96 rounded-xl" src={img3} alt="" />
        </div>
      </SwiperSlide>


    </Swiper>

  </>

}
