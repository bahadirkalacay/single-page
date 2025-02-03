import React from 'react';
import { Box } from '@mui/material';
import house1 from '../../assets/center1.png';
import house2 from '../../assets/center2.png';
import house3 from '../../assets/center3.png';

const HomePageCenterRight = () => {
  return (
    <Box className="p-6 mt-4 md:p-10">
      {/* Ana container */}
      <Box className="flex gap-4">
        {/* Sol taraftaki büyük resim */}
        <Box className="w-8/12 mt-16">
          <img
            src={house1}
            alt="Modern House with Pool"
            className="w-full h-[400px] md:h-[600px] object-fill rounded-[32px] shadow-lg"
          />
        </Box>

        {/* Sağ taraftaki küçük resimler */}
        <Box className="flex flex-col w-4/12 gap-4">
          <Box>
            <img
              src={house2}
              alt="Bedroom Interior"
              className="w-full h-[190px] md:h-[290px] object-fill rounded-[32px] shadow-lg"
            />
          </Box>
          <Box>
            <img
              src={house3}
              alt="Living Room"
              className="w-full h-[190px] md:h-[290px] object-fill rounded-[32px] shadow-lg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageCenterRight;
