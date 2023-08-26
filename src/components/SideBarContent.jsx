import { useState } from 'react'
import { Box, Button,styled,List,ListItem  } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import {SIDEBAR_DATA} from "../config/sidebar.config";
import ComposeMail from "../components/ComposeMail";
import { useParams,NavLink } from 'react-router-dom';
import { routes } from '../routes/routes';

const ComposeButton=styled(Button)({
    backgroundColor:"#c2e7ff",
    color:"#001d35",
    padding: 15,
    borderRadius: 16,
    minWidth:140,
    //Now here everything is coming in uppercase
    //So we need to transform the text
    textTransform:'none'
})
const Container=styled(Box)({
  padding:8,
  '& >ul ':{
    //top bottom left right
       padding:'10px 0 0 5px',
       fontSize: 14,
       fontWeight: 500,
       cursor: 'pointer',
       '& > a':{
          textDecoration:'none',
          color:'inherit'
       }
  },
  //Now if we need gap between all the icons and the list of the items
  '& > ul > a > li > svg':{
    marginRight: 20
  }
})


const SideBarContent = () => {
  const {type} = useParams();
  const[openDialog,setOpenDialog]=useState(false);
  const onComposeClick=()=>{
    setOpenDialog(true)
  }
  
    return (
    <Container>
      <ComposeButton onClick={()=>onComposeClick()}>
        <CreateIcon />Compose
      </ComposeButton>
      <List>
        {
            //Now our sidebar data is an object of the array so we will use map to traverse all the objects
            SIDEBAR_DATA.map(data=>(
              <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                <ListItem style={type===data.name.toLowerCase() ?{
                  backgroundColor: '#d3e3fd',
                  borderRadius: '0 16px 16px 0'
                }:{}}>
                    {/* Now one of the property of our object is title */}
                    {/* Doing data.icon will add image */}
                    <data.icon fontSize="small"/>{data.title}
                </ListItem>
              </NavLink>
             ))
        }
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  );
};

export default SideBarContent;
