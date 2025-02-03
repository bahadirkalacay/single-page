import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import house1 from '../../assets/bottom1.png';
import house2 from '../../assets/bottom2.png';
import house3 from '../../assets/bottom3.png';
const HomePageBottom = () => {
  const properties = [
    {
      id: 1,
      image: house1,
      price: '5,970',
      title: 'Tranquil Haven in the Woods',
      address: '103 Wright CourtBurien, WA 98168',
      beds: 4,
      baths: 3,
      tag: { text: 'Popular', icon: <LocalFireDepartmentIcon />, color: 'bg-red-100 text-red-500' }
    },
    {
      id: 2,
      image: house2,
      price: '1,970',
      title: 'Serene Retreat by the Lake',
      address: '1964 Jehovah Drive, VA 22408',
      beds: 3,
      baths: 2,
      tag: { text: 'New Listing', icon: <HomeIcon />, color: 'bg-blue-100 text-blue-500' }
    },
    {
      id: 3,
      image: house3,
      price: '3,450',
      title: 'Charming Cottage in the Meadow',
      address: '1508 Centennial Farm RoadHarlan, 51537',
      beds: 4,
      baths: 4,
      tag: { text: 'Discounted Price', icon: <AttachMoneyIcon />, color: 'bg-green-100 text-green-500' }
    }
  ];

  return (
    <Box className="container px-6 py-12 mx-auto md:px-10">
      {/* Başlık Kısmı */}
      <Box className="flex flex-col items-start justify-between mb-12 md:flex-row md:items-center">
        <Box className="max-w-2xl">
          <Typography 
            className="mb-4 text-lg tracking-[0.2em] font-medium text-primary"
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            CHECKOUT OUR NEW
          </Typography>
          <Typography 
            variant="h2"
            className="text-3xl font-bold text-gray-900 md:text-4xl"
            sx={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Latest Listed Properties
          </Typography>
          <Typography className="mt-4 text-gray-600">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </Typography>
        </Box>

        {/* Filtre Butonları */}
        <Box className="flex gap-3 mt-6 md:mt-0">
          <Button 
            variant="outlined" 
            className="min-w-[100px] py-2 text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50"
            sx={{ 
              textTransform: 'none',
              borderWidth: '1px',
              '&:hover': { borderWidth: '1px' }
            }}
          >
            All
          </Button>
          <Button 
            variant="contained" 
            className="min-w-[100px] py-2 rounded-full bg-[#3A0CA3] hover:bg-[#2E0A82]"
            sx={{ 
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' }
            }}
          >
            Sell
          </Button>
          <Button 
            variant="outlined" 
            className="min-w-[100px] py-2 text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50"
            sx={{ 
              textTransform: 'none',
              borderWidth: '1px',
              '&:hover': { borderWidth: '1px' }
            }}
          >
            Rent
          </Button>
        </Box>
      </Box>

      {/* Mülk Kartları */}
      <Box className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {properties.map((property) => (
          <Box key={property.id} className="overflow-hidden bg-white shadow-lg rounded-3xl">
            {/* Resim Alanı */}
            <Box className="relative">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-[400px] object-fill"
              />
              <Box 
                className={`absolute bottom-4 left-4 px-5 py-2 rounded-full ${property.tag.color} flex items-center gap-2 shadow-md`}
                sx={{
                  backdropFilter: 'blur(4px)',
                  backgroundColor: property.tag.color === 'bg-red-100 text-red-500' ? 'rgba(254, 226, 226, 0.9)' :
                                 property.tag.color === 'bg-blue-100 text-blue-500' ? 'rgba(219, 234, 254, 0.9)' :
                                 'rgba(220, 252, 231, 0.9)'
                }}
              >
                {React.cloneElement(property.tag.icon, { 
                  fontSize: 'small',
                  className: 'opacity-90' 
                })}
                <span className="text-sm font-medium">{property.tag.text}</span>
              </Box>
            </Box>

            {/* İçerik Alanı */}
            <Box className="p-5">
              <Typography variant="h3" className="mb-2 text-xl font-bold">
                $ {property.price}
              </Typography>
              <Typography variant="h4" className="mb-2 text-lg font-semibold text-gray-800">
                {property.title}
              </Typography>
              <Typography className="mb-4 text-sm text-gray-500">
                {property.address}
              </Typography>

              {/* Özellikler */}
              <Box className="flex gap-4">
                <Box className="flex items-center gap-1 text-gray-600">
                  <BedIcon sx={{ fontSize: '20px' }} />
                  <span className="text-sm">{property.beds} Beds</span>
                </Box>
                <Box className="flex items-center gap-1 text-gray-600">
                  <BathtubIcon sx={{ fontSize: '20px' }} />
                  <span className="text-sm">{property.baths} Bath</span>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePageBottom;
