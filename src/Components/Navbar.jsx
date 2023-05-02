import { AppBar, Box, InputBase,Badge, Typography, Avatar,Menu,MenuItem } from "@mui/material";
import React, { useState } from "react";
import { StyleToolbar,StyledBox } from "../Themes/styled";

import { Mail, Notifications, Pets } from "@mui/icons-material";
export const Navbar=()=>{
    const [opn,setOpn] =useState(false);
    return(
         <AppBar position="sticky">
            <StyleToolbar>
            <Typography sx={{display:{xs:"none",sm:"block"}}}>
                lava dev
            </Typography>
            <Pets sx={{display:{xs:"block",sm:"none"}}}/>
             <StyledBox sx={{width:40 +'%'}}>
                <InputBase placeholder="search..."/>
             </StyledBox>
             <Box sx={{display:"flex",gap:4}}>
             <Badge badgeContent={4} color="error">
               <Mail />
             </Badge>
             <Badge badgeContent={3} color="error">
                <Notifications/>
             </Badge>
             <Avatar  
             sx={{width:30,height:30}}
             onClick={e=>setOpn(true)}
             src="https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg"/>
             </Box>
             <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={opn}
        onClose={e=>setOpn(false)}
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
            </StyleToolbar>
         </AppBar>
           
        
    )
}