import mongoose from 'mongoose'

const schema =  new  mongoose.Schema(
    {
        InputName:{
            type:String,
            required:true
        },

        InputEmail:{
            type:String,
            required:true
        },

        InputSubject: {
            type: String,
            required: true
        },

        InputMessage:{
            type:String,
            required:true
        },
        createdAt: {
             type: Date,
             required: true
        },

        updatedAt: {
            type: Date,
            required: true

        }

    }
)

export default mongoose.models.posts || mongoose.model('posts' , schema)