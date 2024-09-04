import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function SwiperExample() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rem
          molestiae aspernatur consequatur modi. Quisquam natus, quia beatae
          molestiae minus, libero voluptatibus facere modi nemo atque
          voluptatum, hic nam excepturi autem corporis quasi id soluta sunt ex.
          Quisquam dolore repellat nesciunt, ipsam voluptatem, iure mollitia ut
          ad cupiditate quidem qui.
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rem
          molestiae aspernatur consequatur modi. Quisquam natus, quia beatae
          molestiae minus, libero voluptatibus facere modi nemo atque
          voluptatum, hic nam excepturi autem corporis quasi id soluta sunt ex.
          Quisquam dolore repellat nesciunt, ipsam voluptatem, iure mollitia ut
          ad cupiditate quidem qui.
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rem
          molestiae aspernatur consequatur modi. Quisquam natus, quia beatae
          molestiae minus, libero voluptatibus facere modi nemo atque
          voluptatum, hic nam excepturi autem corporis quasi id soluta sunt ex.
          Quisquam dolore repellat nesciunt, ipsam voluptatem, iure mollitia ut
          ad cupiditate quidem qui.
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
