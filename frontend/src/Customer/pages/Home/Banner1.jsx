// Aditiya 16/04

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../Components/styles/Banner1.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImgBanner = [
  {
    id: 0,
    alt: "img 1",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16042024-MainBannerDailyChanging-Z1-P4-Gap-AX-min50extra750.jpg",
    href: "#",
  },
  {
    id: 1,
    alt: "img 2",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-17042024-MainBannerDailyChanging-Z1-P7-Anubhutee-Varanga-Min70.jpg",
    href: "#",
  },
  {
    id: 2,
    alt: "img 3",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-150424-UHP-MainBanner-Z1-Prebuzz-5080%20(1).gif",
    href: "#",
  },
  {
    id: 3,
    alt: "img 4",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16042024-MainBannerDailyChanging-Z1-P3-STEVEMADDEN-Baggit-4070.jpg",
    href: "#",
  },
  {
    id: 4,
    alt: "img 5",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-16042024-MainBannerDailyChanging-Z1-P5-Nike-Asics-min35extra750.jpg",
    href: "#",
  },
  {
    id: 5,
    alt: "img 6",
    src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-17042024-MainBannerDailyChanging-Z1-P7-Anubhutee-Varanga-Min70.jpg",
    href: "#",
  },
];

const Banner1 = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {ImgBanner.map(({ id, alt, src ,href}) => (
        <SwiperSlide key={id}>
          <Link to={href}>
          <img src={src} alt={alt} />
          </Link>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner1;
