//Importing dialog box
import { useState} from 'react';
import {Dialog,Box,Typography,styled, InputBase,TextField,Button} from '@mui/material'
import {Close,DeleteOutline} from '@mui/icons-material'
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogStyle={
    height:'90%',
    width:'80%',
    // Now intially default there is some maxwidth and max height 
    //So when we set height and width then there in % it will take acc to max width and max height
    //So instead we will keep maxwidth and maxheight as 100%
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow: 'None',
    borderRadius:'10px 10px 0 0'
}
const Header= styled(Box)({
    // We will be applying CSS directly on vox
    //Display flex get appied on parent element it will bring 
    //All the child elements inline
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    //Default font of typography is 16px
    //Inbuilt typography has a p tag
    '& > p':{
        fontSize: '14px',
        fontWeight: '500px'
    }

})
const RecipientsWraper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding: '0 15px',
    //In InputBasethere is a div now we will handle it's CSS
    '& > div ':{
        //To change the fontsize of the text
        fontSize:14,
        fontWeight:500,
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }
})
const FooterStyle =styled(Box)({
    display:'flex',
    //Space between pushes ont to left and another to the right
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center'
})
const SendButton =styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100
})
const ComposeMail = ({openDialog,setOpenDialog})=>{
    const [data,Setdata]=useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmails);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);
        const config ={        
            Host : "smtp.elasticemail.com",
            Username : "parikh1229@yopmail.com",
            Password :"D1660C4E4E9F649DEC7F0D89A98836D955DD",
            
            Port:2525,
    }
    const closeComposeMail=(e)=>{
        //To prevent any default settings of browser
        e.preventDefault(); 
        const payload ={
            to: data.to,
            from: "saumyaparikh129007@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Saumya Parikh',
            starred: false,
            type:'drafts'
        }   
        saveDraftService.call(payload);
        //If there are no erros then
        if(!saveDraftService.error){
            //Then we will close our dialog box
            setOpenDialog(false);
            //And then we need to again intializa data by removing the old one
            Setdata({});
        }
        //If there is any error
        else{

        }
 
    }
    const sendMail =(e)=>{
        e.preventDefault();
        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : 'saumyaparikh129007@gmail.com',
                Subject : data.subject,
                Body : data.body,
            }).then(
              message => alert(message)
            );    
        } 
        const payload ={
            to: data.to,
            from: "saumyaparikh129007@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'Saumya Parikh',
            starred: false,
            type:'sent'
        }   
        sentEmailService.call(payload);
        //If there are no erros then
        if(!sentEmailService.error){
            //Then we will close our dialog box
            setOpenDialog(false);
            //And then we need to again intializa data by removing the old one
            Setdata({});
        }
        //If there is any error
        else{

        }
       // setOpenDialog(false);
    }
    const deleteMail=()=>{
        setOpenDialog(false);
    }
    const onValueChange=(e)=>{
            Setdata({...data,[e.target.name]:e.target.value})
            console.log(data);
    }
    return(
        <Dialog 
        open={openDialog}
        PaperProps={{sx:dialogStyle}}>
           
            <Header>

                <Typography>New Message</Typography>  
                <Close fontSize='small' onClick={(e)=>closeComposeMail(e)}/>
              </Header>
            <RecipientsWraper>
                <InputBase placeholder='Recipients' name='to' onChange={(e)=>onValueChange(e)} value={data.to}/>
                <InputBase placeholder ='Subject' name='subject'onChange={(e)=>onValueChange(e)} value={data.subject}/>
                           
            </RecipientsWraper>
            <TextField 
            multiline
            rows={20}
            sx={{'& .MuiOutlinedInput-notchedOutline ': {border:'none'}}}
            name='body'
             onChange={(e)=>onValueChange(e)}
             value={data.body}
            />   
            <FooterStyle>
                <SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>
                {/* <DeleteOutline onClick={()=>deleteMail()}/> */}
                <DeleteOutline onClick={() => setOpenDialog(false)} />
            </FooterStyle>
       </Dialog>
    )
}
export default ComposeMail; 