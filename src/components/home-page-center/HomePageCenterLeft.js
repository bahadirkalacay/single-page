import React from "react";
import { Box, Typography } from "@mui/material";
import HomePageCenterBottom from "./HomePageCenterBottom";

const HomePageCenterLeft = () => {
  return (
    <Box className="p-6 md:p-10">
      {/* WHO ARE WE başlığı */}
      <Typography
        variant="subtitle1"
        className="mb-6 text-lg tracking-[0.2em] font-medium text-primary"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          marginTop: "16px",
          marginLeft: "5%",
        }}
      >
        WHO ARE WE
      </Typography>

      {/* Ana başlık */}
      <Typography
        variant="h2"
        className="mb-6 text-3xl font-bold leading-tight md:text-4xl"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          color: "#1F2937",
          marginTop: "16px",
          marginLeft: "5%",
        }}
      >
        Assisting individuals in
        <br />
        locating the appropriate
        <br />
        real estate.
      </Typography>

      {/* Açıklama metni */}
      <Typography
        variant="body1"
        className="max-w-xl mb-12 text-gray-600"
        sx={{
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.7,
          marginTop: "16px",
          marginLeft: "5%",
        }}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
      </Typography>

      <div className="hidden md:block">
        <HomePageCenterBottom />
      </div>
    </Box>
  );
};

export default HomePageCenterLeft;
