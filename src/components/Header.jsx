import{ AppBar, Toolbar, styled,InputBase,Box} from '@mui/material';
//Now we will import our material icons
import{Menu as MenuIcon, Search,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
//Importing the gmail logo
import{ gmaillogo } from '../constants/constants'
const StyledAppBar= styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none'
})
//So Now we will apply styling on box and we will keep name as Search Wrapper
//So replacing box with Searchwrapper
const SearchWrapper=styled(Box)({
      background:'#EAF1FB',
      marginLeft: 80,
      borderRadius: 8,
      minWidth: 690,
      maxWidth: 720,
      height: 48,
      //As icons are going up we will align them to center we need to use flex
      display: 'flex',
      alignItems:'center',
      //Now we need to push  both icons on one end 
      justifyContent:'space-between',
      padding: '0 20px',
      //Now we will handle css of child div using aprent
      '& > div ':{
        width:'100%',
        padding:'0 10px',
        
        
      }
      
});
const OptionsWrapper=styled(Box)({
    //We need to bring all of them to right
    //So first of all we need to make the width 100%
    width:'100%',
    display:'flex',
    justifyContent:'end',
    //Now this all icons are called as svg icons we need to add space between the
    '& > svg':{
        marginLeft:20 
    }

})
const Header=({toggleDrawer})=>{
    return(
        <StyledAppBar position="static" >
            <Toolbar>
                <MenuIcon color='action' onClick={toggleDrawer}/>
                <img src={gmaillogo} alt="logo" style={{width:110,marginLeft:15}} />
                <SearchWrapper>
                <Search color='action'/>
                <InputBase 
                placeholder='Search Mail'                
                />

                <Tune color='action'/>                
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action'/>
                    <AccountCircleOutlined color='action'/>
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}
export default Header