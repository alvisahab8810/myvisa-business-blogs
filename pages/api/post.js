import initDB  from '../../helpers/initDB'
import postsModel from '../../models/posts.model'
import moment from 'moment';



initDB();

export default async ( req, res ) => {
    const { InputName, InputEmail, InputSubject, InputMessage, createdAt, updatedAt } =req.body;

    const savePost = await new postsModel({
        InputName        : InputName,
        InputEmail  : InputEmail,
        InputSubject  : InputSubject,
        InputMessage  : InputMessage,
        createdAt    : createdAt,
        updatedAt    : updatedAt
       
    }).save();




    if (savePost) {
        res.json({message: "your form hasbeen submitted"})
    }else{
        res.json({message: "something went wrong"})
    }
}