import { Drawer } from '@mui/material';
import SideBarContent from '../components/SideBarContent'

const Sidebar=({openDrawer})=>{
    return(
       <Drawer
        anchor='left'
        open={openDrawer}
        //Doing this the back will remain same after opening of th drawer
        hideBackdrop={true}
        ModalProps={{
            keepMounted: true
        }}
        //There are different variants we will be using persistent for this
        variant='persistent'
        sx={{
            '& .MuiDrawer-paper':{
                //Now here by default if we do not take it in string
                //i.e. 64 default it takes in rem so it will 8rem * 64 so it will take 512px 
                marginTop:'64px',
                width:250,
                background:'#F5F5F5',
                borderRight:'none',
                height:'calc(100vh-64px)'
            }
        }}
        > 
          {/* Here we will be adding our content of the sidebar box */}
          <SideBarContent/>

       </Drawer>
    )
}
export default Sidebar;