import mongoose, { models } from 'mongoose'

const authSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    country_code:{
        type:String,
        required:true
    },   
    mobile_number:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
    email_token:{
        type:String,
        required:true
    },
    email_verified_at:{
        type:String,
        required:true
    },
    mobile_verified_at:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }, 
    createdAt:{
        type:String,
        required:true
    }, 
    updatedAt:{
        type:String,
        required:true
    }, 
})

export default mongoose.models.users || mongoose.model('users',authSchema)