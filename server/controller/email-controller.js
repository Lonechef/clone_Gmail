
import Email from "../model/email.js"


//We will be saving the sent Emails
export const saveSentEmails= async (request,response)=>{
    //We want to store the data in our database
    try{
      const email =  await new Email(request.body);
      //To save it we will be using save function
      email.save();

      response.status(200).json('Email saved successfully')
    }catch(error){
        response.status(500).json(error.message);
    }

}
export const getEmails = async (request,response)=>{
  try{
    let emails;
    if (request.params.type==='bin'){
        emails=await Email.find({bin:true})
    }
    else if(request.params.type==='allmail'){
      //Passing empty means we  want our all the mails to come here
      emails =await Email.find({})
    }
    else if(request.params.type==='starred'){
      emails=await Email.find({starred:true, bin: false})

    }
    else if (request.params.type === 'inbox') {
      emails = [];
    }
    else{
    emails =await Email.find({type: request.params.type})
    }


    return response.status(200).json(emails);
  }
   catch(error){
    console.log(error);
      response.status(500).json(error.message)
  }
}

export const moveEmailsToBin = async (request,response) =>{
  try{
    //to get the id of the mail we will be using the operator of Mongo $in and $set
    await Email.updateMany({_id:{$in:request.body}},{$set:{bin : true, starred:false, type:''}})
    return response.status(200).json('emails deleted successfully');
  }catch(error){
    console.log(error);
    response.status(500).json(error.message)

  }

}

export const toggleStarredEmails = async(request,response)=>{
  try{
    await Email.updateOne({_id:request.body.id},{$set:{starred : request.body.value}})
    return response.status(200).json("Email is starred markded")
  }
  catch(error){
    console.log(error);
    response.status(500).json(error.message)
  }
}

export const deleteEmails = async (request,response)=>{
  try{
    //Now we need to delete all the mails from our Mobgodb collection
    await Email.deleteMany({_id: {$in:request.body}});
    request.status(200).json('emails deleted successfully')
  }catch(error){
    console.log(error);
    response.status(500).json(error.message)
  }
}