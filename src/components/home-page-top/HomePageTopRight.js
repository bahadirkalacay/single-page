import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

const HomePageTopRight = () => {
  const [activeTab, setActiveTab] = useState('sale');

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      height: '60px',
      backgroundColor: '#F9FAFB',
      '& fieldset': {
        borderColor: '#E5E7EB',
      },
      '&:hover fieldset': {
        borderColor: '#E5E7EB',
      },
    },
    marginBottom: '16px'
  };

  return (
    <Box className="max-w-xl p-6 mx-auto bg-white shadow-lg md:p-10 rounded-3xl">
      {/* Tab Buttons */}
      <Box className="flex mb-10 border-b">
        <Button
          onClick={() => setActiveTab('sale')}
          className={`flex-1 pb-4 text-lg font-semibold rounded-none transition-all duration-300 ${
            activeTab === 'sale'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          For Sale
        </Button>
        <Button
          onClick={() => setActiveTab('rent')}
          className={`flex-1 pb-4 text-lg font-semibold rounded-none transition-all duration-300 ${
            activeTab === 'rent'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          For Rent
        </Button>
      </Box>

      {/* Search Form */}
      <Box className="space-y-6">
        <TextField
          fullWidth
          placeholder="New York, San Francisco, etc"
          variant="outlined"
          sx={textFieldSx}
        />

        <TextField
          select
          fullWidth
          defaultValue=""
          placeholder="Select Property Type"
          sx={textFieldSx}
        >
          <MenuItem value="">Select Property Type</MenuItem>
          <MenuItem value="house">House</MenuItem>
          <MenuItem value="apartment">Apartment</MenuItem>
          <MenuItem value="condo">Condo</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          defaultValue=""
          placeholder="Select Rooms"
          sx={textFieldSx}
        >
          <MenuItem value="">Select Rooms</MenuItem>
          <MenuItem value="1">1 Room</MenuItem>
          <MenuItem value="2">2 Rooms</MenuItem>
          <MenuItem value="3">3 Rooms</MenuItem>
          <MenuItem value="4">4+ Rooms</MenuItem>
        </TextField>

        {/* Advanced Search Link */}
        <Box className="flex items-center gap-2 py-3 transition-all duration-300 cursor-pointer text-primary hover:opacity-80">
          <TuneIcon className="text-primary" fontSize="small" />
          <Typography className="text-sm font-medium">
            Advance Search
          </Typography>
        </Box>

        {/* Search Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: '56px',
            borderRadius: '9999px',
            backgroundColor: '#3A0CA3',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            boxShadow: '0 4px 6px -1px rgb(79 70 229 / 0.2)',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 500,
          }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomePageTopRight;
