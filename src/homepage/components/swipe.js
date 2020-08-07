import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Swipe() {
    return (
        <div className="swip-grid">

            <div className="swiper-container">
    <Swiper
      spaceBetween={0}
    //   slidesPerView={3}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
          <img className="img-hi" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1596188193/contentservice/Devon-Kings-1253.jpg_SyFQUwZWP.jpg" />
      </SwiperSlide>
      <SwiperSlide>
          <img className="img-hi" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1595427454/contentservice/Nivea.jpg_rkHKcTBlv.jpg" />
      </SwiperSlide>
      <SwiperSlide>
          <img className="img-hi" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1596641111/contentservice/Konga-Pay-carousel.jpg_HyCIyL_Wv.jpg" />
      </SwiperSlide>
      <SwiperSlide>
          <img className="img-hi" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1595841206/contentservice/frutta.jpg_Hk03czhxP.jpg" />
      </SwiperSlide>
      ...
    </Swiper>
            </div>

        <div className="swipe-2">
            <h1>Hellol</h1>
        </div>

        </div>
    )
}
