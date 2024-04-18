// Aditiya 16/04

import React from 'react'

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
