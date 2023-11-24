import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import Input from '@mui/material/Input';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    
});

const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 20px",
    borderRadius: "2px",
    position:"relative",
    width:"40%",
    margin:"0",
    cursor:"pointer",
    height:"30px"
    
    
    
}))

const Icons = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"18px",
    alignItems:"center",
    cursor:"pointer",
    
    

   
}))

const Userbox= styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    cursor:"pointer"
   
}))


function Navbar() {
    const [open,setopen]=useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography
                    variant='h6'
                    sx={{ display: { xs: "none", sm: 'block' } }}
                >
                    APP
                </Typography>
                <SpaRoundedIcon
                    sx={{ display: { xs: "block", sm: 'none' } }}

                />
                <SearchBar><Input placeholder='Search'sx={{
                    alignContent:"bottom",
                    textDecoration:"none",
                    border:"none"
                }} /></SearchBar>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <EmailIcon/>

                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <NotificationsIcon/>
                    </Badge>
                    <Userbox>
                    <Avatar  alt="Aemy Sharp" src="c:\Users\Akshay\Desktop\AKSHAY\_DSC3754 - Copy.JPG"sx={{width:30,height:30}} onClick={e=>setopen(true)} />
                    <Typography variant='h6'>
                        JOHN
                    </Typography>
                    </Userbox>

                </Icons>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
 

        </AppBar>
    )
}

export default Navbar