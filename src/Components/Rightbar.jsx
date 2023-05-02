import { Box, Typography,Avatar,AvatarGroup, ImageList, 
    ImageListItem,List,ListItem ,ListItemText,Divider, ListItemAvatar} from "@mui/material";
import React from "react";
export const Rightbar=()=>{
    return(
        <Box
        flex={4} 
        p={2}
        sx={{display:{xs:"none",sm:"block"}}}
        >
        <Box position={"fixed"}>
        <Typography variant="h6"> Online Freinds</Typography>
        <AvatarGroup total={10}>
           <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.sPYoTfBMDMGD0ZMrGMCTygHaNK?pid=ImgDet&rs=1" />
           <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.gfMK_kw1pzUPqsDk3XvzUgHaL0?pid=ImgDet&rs=1" />
           <Avatar alt="Agnes Walker" src="https://th.bing.com/th/id/OIP.Vyp8AeShu5mwyd43qMMX6AHaHa?pid=ImgDet&w=177&h=177&c=7&dpr=1.5" />
           <Avatar alt="Trevor Henderson" src="https://th.bing.com/th/id/OIP.bHJYB6QN-82U9gZ47pRTiAHaLH?w=193&h=290&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
        </AvatarGroup>
        <Typography variant="h6" marginTop={2}>
            Latest Photos
        </Typography>
        <ImageList cols={3} gap={5}>
            <ImageListItem>
                <img src="https://th.bing.com/th/id/OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo?pid=ImgDet&rs=1"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://th.bing.com/th/id/OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo?pid=ImgDet&w=1920&h=1200&rs=1"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://th.bing.com/th/id/OIP.YDJzemAv0ZM5JTksh6zsqAHaF7?pid=ImgDet&rs=1"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://th.bing.com/th/id/OIP.nyFLBYjD207JNHC4hBQBAwHaE8?pid=ImgDet&rs=1"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?pid=ImgDet&rs=1"/>
            </ImageListItem>
        </ImageList>
        <Typography variant="h6" marginTop={2}>
            latest conservation
        </Typography>
        <List sx={{  bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
        </Box>
    )
}