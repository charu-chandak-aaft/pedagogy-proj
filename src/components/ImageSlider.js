'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  return (
    <div className="p-5 mx-auto w-[600]">
      <h1>My Slider</h1>
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      centeredSlides={true}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1440: {
          slidesPerView: 1.7,
        },
      }}
      
    >
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img className="w-full" src="ms-akanshi.webp" alt=""/></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default ImageSlider;