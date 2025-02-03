import React from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


const HomePageTopBottom = () => {
  // Örnek avatar resimleri için placeholder
  const avatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
  ];

  return (
    <Box className="flex flex-col items-center justify-center gap-8 mt-12 md:flex-row">
      {/* Happy Customers Section */}
      <Box className="flex items-center px-4 py-2 bg-white rounded-full shadow-lg">
        <AvatarGroup max={6} sx={{ marginRight: 2 }}>
          {avatars.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar}
              sx={{
                width: 32,
                height: 32,
                border: '2px solid white',
              }}
            />
          ))}
        </AvatarGroup>
        <Box>
          <Typography 
            variant="h6" 
            className="text-lg font-bold"
            sx={{ color: '#1F2937' }}
          >
            72k+ Happy
          </Typography>
          <Typography 
            variant="body2"
            className="text-gray-600"
          >
            Customers
          </Typography>
        </Box>
      </Box>

      {/* New Listings Section */}
      <Box className="flex items-center px-4 py-2 bg-white rounded-full shadow-lg">
        <Avatar
         // src={house}
          sx={{
            width: 32,
            height: 32,
            marginRight: 2,
            border: '2px solid white',
          }}
        />
        <Box>
          <Typography 
            variant="h6" 
            className="text-lg font-bold"
            sx={{ color: '#1F2937' }}
          >
            200+ New
          </Typography>
          <Typography 
            variant="body2"
            className="text-gray-600"
          >
            Listings Everyday!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageTopBottom;
