import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Listings', path: '/listings' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Become a Agent', path: '/become-agent' },
  ];

  const discovery = [
    { name: 'Canada', path: '/canada' },
    { name: 'United States', path: '/united-states' },
    { name: 'Germany', path: '/germany' },
    { name: 'Africa', path: '/africa' },
    { name: 'India', path: '/india' },
  ];

  return (
    <Box className="bg-[#F8F9FF]">
      <Box className="container px-6 py-16 mx-auto md:px-10">
        <Box className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo ve İletişim */}
          <Box>
            <Box className="flex items-center gap-2 mb-6">
              <Box className="flex items-center justify-center w-10 h-10 text-white rounded-lg bg-primary">
                <HomeWorkIcon />
              </Box>
              <Typography variant="h6" className="text-2xl font-bold">
                Rezilla
              </Typography>
            </Box>
            <Typography className="mb-6 text-gray-600">
              Lorem ipsum has been the industry standard dummy text
            </Typography>
            <Box className="flex flex-col gap-3">
              <Typography className="text-gray-600">
                +90123 45 67
              </Typography>
              <Typography className="text-gray-600">
                mail@mail.com
              </Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box className="hidden md:block">
            <Typography variant="h6" className="mb-6 text-lg font-semibold">
              Quick Links
            </Typography>
            <Box className="flex flex-col gap-4 mt-4">
              {quickLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.path}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </Box>
          </Box>

          {/* Discovery */}
          <Box className="hidden md:block">
            <Typography variant="h6" className="mb-6 text-lg font-semibold">
              Discovery
            </Typography>
            <Box className="flex flex-col gap-4 mt-4">
              {discovery.map((link) => (
                <a 
                  key={link.name}
                  href={link.path}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </Box>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography variant="h6" className="mb-6 text-lg font-semibold">
              Subscribe to our Newsletter!
            </Typography>
            <Box className="flex gap-2">
              <TextField
                placeholder="Email Address"
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '9999px',
                    backgroundColor: 'white',
                    '& fieldset': {
                      borderColor: '#E5E7EB',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  minWidth: 'auto',
                  width: '48px',
                  height: '48px',
                  borderRadius: '9999px',
                  backgroundColor: '#3A0CA3',
                  '&:hover': {
                    backgroundColor: '#2E0A82',
                  },
                }}
              >
                →
              </Button>
            </Box>

            {/* Social Media */}
            <Box className="mt-8">
              <Typography variant="h6" className="mb-4 text-lg font-semibold">
                Follow Us on
              </Typography>
              <Box className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary-dark">
                  <LinkedInIcon />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark">
                  <FacebookIcon />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark">
                  <InstagramIcon />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Alt Footer */}
      <Box className="py-6 bg-black">
        <Box className="container flex flex-col items-center justify-between gap-4 px-6 mx-auto md:flex-row md:px-10">
          <Typography className="text-sm text-gray-400">
            © Company – All rights reserved
          </Typography>
          <Box className="flex gap-6">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms and Conditions
            </a>
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/disclaimer" className="text-sm text-gray-400 hover:text-white">
              Disclaimer
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
