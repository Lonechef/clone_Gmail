import{Photo,StarOutline, SendOutlined, InsertDriveFileOutlined,
DeleteOutline, MailOutline} from '@mui/icons-material'
// As we are going to add more then one object so we wil be using array
export const SIDEBAR_DATA=[
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarOutline
    },
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        name:'draft',
        title:'Drafts',
        icon:InsertDriveFileOutlined    
    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutline    
    },
    {
        name:'allmail',
        title:'All Mail',
        icon:MailOutline    
    }
];

