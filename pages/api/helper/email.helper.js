import nodemailer from 'nodemailer'

const sendEmail = async (to_email, subject, message) => {

    const from_name   = 'HashTagBazaar.com';
    // const from_email  = data.from_email?data.from_email:'no-reply@hashtagbazaar.com';
    // const to_email    = toemail;
    const cc_email      = '';//data.cc_email;
    const bcc_email     = '';//data.bcc_email;
    // const subject     = subject;
    // const message     = content;

    let transporter = nodemailer.createTransport({
        host    : process.env.SMTP_HOST,
        port    : process.env.SMTP_PORT,
        secure  : false, // true for 465, false for other ports
        auth: {
          user  : process.env.SMTP_USERNAME, // generated ethereal user
          pass  : process.env.SMTP_PASSWORD, // generated ethereal password
        },
    });
  
    var mailOptions = {
    //   from      : '"'+from_name+'" <'+from_email+'>',
      from      : '"MyVisa.org.in" <info@inperge.com>',
      to        : to_email,
      cc        : cc_email,
      bcc       : bcc_email,
      subject   : subject,
      html      : message
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            // console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            // console.log("mail send");
            res.send("success");
        }
    });  
}

export default sendEmail;