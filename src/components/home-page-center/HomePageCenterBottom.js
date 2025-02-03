import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

const HomePageCenterBottom = () => {
  return (
    <Box className="space-y-6">
        {/* Kart 1 */}
        <Box
          sx={{ marginTop: "16px", marginLeft: "5%" }}
          className="max-w-md p-6 bg-white shadow-lg rounded-2xl"
        >
          <Box className="flex items-center gap-4 mb-4">
            <Box className="p-2 rounded-lg bg-primary/10">
              <HomeIcon className="text-primary" />
            </Box>
            <Typography
              variant="h6"
              className="text-lg font-semibold text-primary"
            >
              Lorem ipsum has been the
            </Typography>
          </Box>
          <Typography className="text-gray-600">
            when an unknown printer took a galley
          </Typography>
        </Box>

        {/* Kart 2 */}
        <Box
          sx={{ marginTop: "16px", marginLeft: "5%" }}
          className="max-w-md p-6 bg-white shadow-lg rounded-2xl"
        >
          <Box className="flex items-center gap-4 mb-4">
            <Box className="p-2 rounded-lg bg-primary/10">
              <PersonIcon className="text-primary" />
            </Box>
            <Typography
              variant="h6"
              className="text-lg font-semibold text-primary"
            >
              Lorem ipsum has been the
            </Typography>
          </Box>
          <Typography className="text-gray-600">
            when an unknown printer took a galley
          </Typography>
        </Box>
      </Box>
  )
}

export default HomePageCenterBottom
