import initDB from '../../../helpers/initDB'
import Users from '../../../models/users.model'
import bcrypt from 'bcryptjs'
import sendEmail from '../helper/email.helper'
import moment from 'moment';
import emailVerifyTemplate from '../email-templates/email-verify-template.html'

initDB();

export default async ( req, res) => {
    switch(req.method) {
      case "POST" : 
        await signUp(req, res)
    }
}

const signUp = async( req, res) => {

  const { first_name, last_name, email, country_code, mobile_number, password } = req.body;
  try {
    // VALIDATION
    if(!first_name || !last_name || !email || !password) {
      return res.status(422).json({error:"please fill all the fields"})
    }

    const user = await Users.findOne({email})

    if(user) {
      return res.status(422).json({error:"This email already registered with us."})
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await new Users({
      first_name,
      last_name,
      email,
      country_code,
      mobile_number,
      password            : hashedPassword,
      email_token         : Math.random().toString(36).substring(2,75),
      email_verified_at   : "false",
      mobile_verified_at  : "false",
      role                : "customer",
      status              : "pending",
      createdAt           : moment().utcOffset("+05:30").format('MMMM Do YYYY, h:mm:ss A'),
      updatedAt           : moment().utcOffset("+05:30").format('MMMM Do YYYY, h:mm:ss A'),
    }).save();

    if(newUser._id){

      // SEND CONFIRMATION EMAILS
      sendEmail('saikajannt08@gmail.com', 'Please Verify Your Email Address', emailVerifyTemplate.replace("{{verify_email_url}}", `${process.env.BASE_URL}api/auth/email-verify?token=${newUser.email_token}&email=${email}`));

      res.status(201).json({message:"signup success"})
    } else {
      res.status(401).json({message:"Something went's wrong in SignUp! "})
    }
  } catch (error) {
    console.log(error)
  }

}

// const signUp = signUp(req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // VALIDATION
//     if(!name || !email || !password) {
//       return res.status(422).json({error:"please ass all the fields"})
//     }

//     const user = await Users.findOne({email})

//     if(user) {
//       return res.status(422).json({error:"This email already registered with us."})
//     }

//   } catch (error) {
    
//   }
// }

