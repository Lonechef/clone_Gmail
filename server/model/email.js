import mongoose  from "mongoose";

const EmailSchema = new mongoose.Schema({
    to:{
        type: String,
        required: true,
    },
    from:{
        type: String,
        required: true,
    },
    subject:String,
        //As we can leave subject empty also
    body:String,
        //As we can leave body empty also
    date:{
        type: Date,
        required:true
    },
    image:String,
    name:{
        type:String,
        required:true
    },
    starred:{
        //The staared emails type should be true or false
        type:Boolean,
        required:true,
        default:false,
    },
    bin:{
        //Bin is for our deleted emails
        type:Boolean,
        required:true,
        default:false,
    },
    type:{
        //Bin is for our deleted emails
        type:String,
        required:true,
    }

})

const email = mongoose.model('emails',EmailSchema);

export default email;