import { AddIcCallOutlined, DateRange, Image, Mood, PersonAdd, PhotoCamera, VideoCameraBack } from "@mui/icons-material";
import { Tooltip,IconButton,Fab,Box,Typography,Modal, Avatar,
  Stack,TextField,ButtonGroup,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
import { StyledModal,UserBox } from "../Themes/styled";
export const Add=()=>{

    const [opn,setOpn]=useState();
    return(
        <>
        <Tooltip title="Delete"
        onClick={e=>setOpn(true)}
        sx={{left:{xs:"calc(50% - 25)",md:30}}} >
  <IconButton>
  <Fab color="primary" aria-label="add">
  <AddIcon/>
</Fab>
  </IconButton>
</Tooltip>
<StyledModal
  open={opn}
  onClose={e=>setOpn(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography id="modal-modal-title" variant="h6" component="h2"
     textAlign={"center"} color={"gray"}>
      Create post
    </Typography>
    <UserBox>
      <Avatar/>
      <Typography variant="h6">john deo</Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="what's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <Mood color="primary"/>
        <PhotoCamera color="secondary"/>
        <VideoCameraBack color="success"/>
        <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup variant="contained" 
        fullWidth
        aria-label="outlined primary button group">
  <Button >Post</Button>
  <Button sx={{width:"100px"}}><DateRange/></Button>
  
</ButtonGroup>
  </Box>
</StyledModal>
        </>
    )
}