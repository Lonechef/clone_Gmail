import { Box,Typography,styled,Divider} from "@mui/material"

const Component = styled(Box)({
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    marginTop: 50,
    opacity: '0.8',
});
const StyledDivider = styled(Divider)({
    width:'100%',
    marginTop: 10
})
const Nomails =({message})=>{
    return (
        <Component>
            <Typography>{message.heading}</Typography>
            <Typography>{message.subHeading}</Typography>
            <StyledDivider/>
        </Component>
    )
}
export default Nomails