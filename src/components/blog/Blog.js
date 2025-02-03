import React from "react";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

// Swiper stilleri
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 'sm' = 600px
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: { day: "28", month: "Tue" },
      title: "Top 10 Home Buying Mistakes to Avoid",
      description:
        "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      id: 2,
      image: blog2,
      date: { day: "08", month: "Mon" },
      title: "How to Stage Your Home for a Quick Sale",
      description:
        "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
    {
      id: 3,
      image: blog3,
      date: { day: "26", month: "Wed" },
      title: "5 Tips for First-Time Home Sellers",
      description:
        "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    },
    {
      id: 4,
      image: blog1,
      date: { day: "28", month: "Tue" },
      title: "Top 10 Home Buying Mistakes to Avoid",
      description:
        "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      id: 5,
      image: blog2,
      date: { day: "08", month: "Mon" },
      title: "How to Stage Your Home for a Quick Sale",
      description:
        "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    },
  ];

  const BlogCard = ({ blog }) => (
    <Box className="flex flex-col h-full overflow-hidden cursor-pointer rounded-3xl group">
      {/* Resim Alanı */}
      <Box className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Tarih */}
        <Box className="absolute top-1 left-4 bg-white ml-12 rounded-lg p-2 text-center min-w-[60px]">
          <Typography className="text-xl font-bold text-gray-900">
            {blog.date.day}
          </Typography>
          <Typography className="text-sm text-gray-600">
            {blog.date.month}
          </Typography>
        </Box>
      </Box>

      {/* İçerik */}
      <Box className="flex flex-col flex-grow p-6">
        <Typography
          variant="h3"
          className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-primary"
        >
          {blog.title}
        </Typography>
        <Typography className="text-white">{blog.description}</Typography>
      </Box>
    </Box>
  );

  return (
    <Box className="py-16 bg-[#3A0CA3]">
      <Box className="container px-6 mx-auto md:px-10">
        {/* Başlık Kısmı */}
        <Box className="mb-12 text-center">
          <Typography
            className="mb-4 text-lg tracking-[0.2em] font-medium text-white/80"
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT'S TRENDING
          </Typography>
          <Typography
            variant="h2"
            className="text-3xl font-bold text-white md:text-4xl"
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Latest Blogs & Posts
          </Typography>
        </Box>

        {isMobile ? (
          // Mobil görünüm - Alt alta kartlar
          <Box className="flex flex-col gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </Box>
        ) : (
          // Desktop görünüm - Slider
          <Box className="relative px-4">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: ".blog-prev",
                nextEl: ".blog-next",
              }}
              pagination={{
                clickable: true,
                el: ".blog-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="!pb-14"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id} className="h-auto">
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigasyon Butonları */}
            <IconButton
              className="absolute z-10 w-10 h-10 bg-white shadow-lg blog-prev top-1/2 -left-5 hover:bg-gray-50"
              sx={{
                transform: "translateY(-50%)",
                "&.swiper-button-disabled": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                },
              }}
            >
              <ArrowBackIcon className="text-white" />
            </IconButton>
            <IconButton
              className="absolute z-10 w-10 h-10 bg-white shadow-lg blog-next top-1/2 -right-5 hover:bg-gray-50"
              sx={{
                transform: "translateY(-50%)",
                "&.swiper-button-disabled": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                },
              }}
            >
              <ArrowForwardIcon className="text-white" />
            </IconButton>

            {/* Pagination Noktaları */}
            <Box className="flex justify-center gap-2 mt-8 blog-pagination" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Blog;
