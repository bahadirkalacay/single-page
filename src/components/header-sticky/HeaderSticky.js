import React from 'react'
import { Box, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeaderSticky = () => {
  return (
    <Box className="w-full bg-[#3A0CA3] text-white py-2 hidden md:block">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Sol taraf - Lokasyon */}
          <div className="flex items-center space-x-2">
            <LocationOnIcon className="text-sm" />
            <Typography variant="body2">
              Lorem Ipsum has been the industry's standard dummy
            </Typography>
          </div>

          {/* Sağ taraf - İletişim Bilgileri */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="text-sm" />
              <Typography variant="body2">+90123 45 67</Typography>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="text-sm" />
              <Typography variant="body2">mail@mail.com</Typography>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default HeaderSticky