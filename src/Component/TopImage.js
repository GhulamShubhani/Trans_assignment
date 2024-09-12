import { Box } from '@mui/material'
import React from 'react'

const TopImage = ({img}) => {
  return (
    <>
    <Box sx={{height:"300px"}}>
        <img src={img} style={{height:"100%"}} />
      </Box>
    </>
  )
}

export default TopImage