import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typography, Box } from '@mui/material';
import headerTop from '../../assets/header-top.png';
// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomePageTopLeft = () => {
  return (
    <Box className="p-6 md:p-10">
      {/* Başlık Kısmı */}
      <Typography 
        variant="subtitle1" 
        className="mb-6 text-lg tracking-[0.2em] font-medium text-primary"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '20px',
          marginLeft: '5%',
        }}
      >
        REAL ESTATE
      </Typography>
      
      <Typography 
        variant="h2" 
        className="mb-8 text-3xl font-bold leading-tight md:text-3xl"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '-0.02em',
          marginBottom: '20px',
          marginLeft: '5%',
        }}
      >
        Find a perfect<br />
        home you love...!
      </Typography>
      
      <Typography 
        variant="body1"
        className="max-w-xl mb-10 text-lg leading-relaxed text-gray-600"
        sx={{
          fontFamily: "'Inter', sans-serif",
          marginBottom: '20px',
          marginLeft: '5%',
        }}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley
      </Typography>

      {/* Swiper Slider */}
      <Box sx={{ marginLeft: '2%' }} className="overflow-hidden rounded-3xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="rounded-3xl"
        >
          <SwiperSlide>
            <img 
              src={headerTop}
              alt="Luxury Home" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
               src={headerTop}
              alt="Modern Interior" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
             src={headerTop}
              alt="Elegant Design" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomePageTopLeft;
