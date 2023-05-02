import styled from "@emotion/styled";
import { Box, Modal, Toolbar } from "@mui/material";

export const StyleToolbar= styled (Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

export const StyledBox = styled(Box)(({
    backgroundColor:"white",
    borderRadius:"10px"
}));

export const StyledModal = styled (Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});

export const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:10,
    marginBottom:"20px"
})