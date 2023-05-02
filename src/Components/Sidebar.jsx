import React from "react";
import { Dashboard, Group, Home, Person2, Settings, TableView 
  ,ModeNight,ArticleOutlined} from "@mui/icons-material";
import { Box,List,ListItemButton,ListItemIcon,ListItem,
  ListItemText, Switch } from "@mui/material";
import { Add } from "./Add";

export const Sidebar=({mode,setMode})=>{
    return(
        <Box 
        flex={3}
        p={2}
        sx={{display:{xs:"none",sm:"block"}}}
        >
        <Box position={"fixed"}>
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem button>
        <ListItemIcon>
        <Dashboard/>
        </ListItemIcon>
        <ListItemText primary="  Dashboard"  />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
     < TableView />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
     < Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
        <Settings  />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
        <ArticleOutlined />
          </ListItemIcon>
          <ListItemText primary="pages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
         <Person2 />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
         <ModeNight />
          </ListItemIcon>
           <Switch onChange={e=>setMode(mode === "light" ?"dark":"light")}/>
        </ListItem>
          </List>
          </Box>
          <Box marginTop={68} position={"fixed"}>
          <Add/>
          </Box>
         
        </Box>
        
    )
}