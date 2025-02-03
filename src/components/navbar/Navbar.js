import React, { useState } from 'react'
import { Button, IconButton, Drawer, List, ListItem } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Listings', href: '/listings' },
    { text: 'Services', href: '/services' },
    { text: 'Blogs', href: '/blogs' },
  ]

  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Desktop Menü */}
          <div className="items-center hidden space-x-8 md:flex">
            <div className="flex items-center space-x-6">
              <div className="bg-[#E6E6FA] px-4 py-2 rounded-full">
                <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              </div>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/listings" className="text-gray-700 hover:text-gray-900">Listings</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="/blogs" className="text-gray-700 hover:text-gray-900">Blogs</a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <HomeIcon className="text-[#3A0CA3] text-3xl" />
            <span className="ml-2 text-xl font-semibold">Logo</span>
          </div>

          {/* Desktop Butonlar */}
          <div className="items-center hidden space-x-4 md:flex">
            <div className="flex items-center gap-1 text-gray-700 cursor-pointer">
              <PersonOutlineIcon className="text-xl" />
              <span>Login/Register</span>
            </div>
            <Button
              startIcon={<HomeIcon className="text-white" />}
              variant="contained"
              sx={{
                backgroundColor: '#3A0CA3',
                borderRadius: '9999px',
                '&:hover': {
                  backgroundColor: '#2f0a82',
                },
                textTransform: 'none',
                padding: '8px 24px',
              }}
            >
              Add Listing
            </Button>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobil Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
                onClick={handleDrawerToggle}
              >
                {item.text}
              </a>
            </ListItem>
          ))}
          <ListItem>
            <div className="flex items-center gap-1 text-gray-700">
              <PersonOutlineIcon className="text-xl" />
              <span>Login/Register</span>
            </div>
          </ListItem>
          <ListItem>
            <Button
              startIcon={<HomeIcon className="text-white" />}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#3A0CA3',
                borderRadius: '9999px',
                '&:hover': {
                  backgroundColor: '#2f0a82',
                },
                textTransform: 'none',
                padding: '8px 24px',
              }}
            >
              Add Listing
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  )
}

export default Navbar
