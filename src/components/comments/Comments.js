import React from 'react';
import { Box, Typography, Avatar, Rating, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import avatar from '../../assets/avatar.jpg';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';

const Comments = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Barbara D. Smith',
      avatar: avatar,
      rating: 4,
      comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
    },
    {
        id: 2,
        name: 'Barbara D. Smith',
        avatar: avatar,
        rating: 4,
        comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      },
      {
        id: 3,
        name: 'Barbara D. Smith',
        avatar: avatar,
        rating: 4,
        comment: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
      },
    // Diğer yorumlar için aynı yapıda objeler eklenebilir
  ];

  return (
    <Box className="py-16">
      <Box className="container px-6 mx-auto md:px-10">
        <Box className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Sol Taraf - Başlık */}
          <Box>
            <Typography 
              className="mb-4 text-lg tracking-[0.2em] font-medium text-primary"
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            >
              TESTIMONIALS
            </Typography>
            <Typography 
              variant="h2"
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
              sx={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Look What Our<br />
              Customers Say!
            </Typography>
            <Typography className="mb-8 text-gray-600">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
            </Typography>
            
            {/* Navigasyon Butonları */}
   
          </Box>

          {/* Sağ Taraf - Yorum Kartı */}
          <Box className="relative">
            {/* Dekoratif Elementler */}
            <Box className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10" />
            <Box className="absolute top-0 text-yellow-300 right-20 opacity-20">
              <FormatQuoteIcon sx={{ fontSize: '120px' }} />
            </Box>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next'
              }}
              className="shadow-xl rounded-xl testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Box className="p-10 bg-white rounded-3xl">
                    <Typography className="mb-8 text-lg text-gray-600">
                      {testimonial.comment}
                    </Typography>
                    <Box className="mt-8">
                        <Divider />
                    </Box>
                    <Box className="flex items-center justify-between mt-8">
                      <Box className="flex items-center gap-4">
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{ width: 48, height: 48 }}
                        />
                        <Typography className="font-semibold text-gray-900">
                          {testimonial.name}
                        </Typography>
                      </Box>
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{ color: '#FCD34D' }}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <Box className="flex gap-4 mt-4">
              <button className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all border border-gray-200 rounded-full testimonial-prev hover:border-primary hover:text-primary">
                <ArrowBackIcon />
              </button>
              <button className="flex items-center justify-center w-12 h-12 text-gray-400 transition-all border border-gray-200 rounded-full testimonial-next hover:border-primary hover:text-primary">
                <ArrowForwardIcon />
              </button>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Comments;
