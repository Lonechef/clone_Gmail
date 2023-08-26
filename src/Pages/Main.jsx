import {useState, Suspense} from 'react';
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader';
import {Box,styled} from '@mui/material'
const Wrapper = styled(Box)`
    display: flex;
`;
const Main=()=>{
    //We will keep true as intially we want it to be open
    //opendrawer is our value
    const[openDrawer,setOpenDrawer]=useState(true);
    

    //Now we need to toggle it so
    const toggleDrawer=()=>{
        setOpenDrawer(prevState=>!prevState);
    }
    return(
       <>            {/* To trigger setOpendrawer using toggleDrawer */}
       <Header toggleDrawer={toggleDrawer} />  
       <Wrapper> 
       <Sidebar openDrawer={openDrawer} />
       <Suspense fallback={<SuspenseLoader />}>
            <Outlet context={{ openDrawer }}/>
       </Suspense>
       </Wrapper>
       </>

       
        
    )
}
export default Main;