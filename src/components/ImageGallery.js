"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import slider1 from "@/../public/slider/slider1.jpg";
import slider2 from "@/../public/slider/slider2.jpg";
import slider3 from "@/../public/slider/slider3.jpg";
import slider4 from "@/../public/slider/slider4.jpg";

export default function ImageGallery() {
  const images = [slider1, slider2, slider3, slider4];

  return (
    <section className="mb-14">
      <h1 className="font-bold text-slate-900 text-3xl text-center my-8">
        Highlights
      </h1>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
        }}
        effect="fade"
        className="h-[600px]"
      >
        {images.map((img) => (
          <SwiperSlide key={img} className="w-full">
            <Image
              src={img}
              alt="image"
              className="w-full h-[600px] object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
