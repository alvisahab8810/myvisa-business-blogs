import nodemailer from 'nodemailer'

const sendEmail = async () => {

    const from_name   = 'HashTagBazaar.com';
    // const from_email  = data.from_email?data.from_email:'no-reply@hashtagbazaar.com';
    const to_email    = 'saikajannat08@gmail.com';//data.to_email;
    const cc_email    = '';//data.cc_email;
    const bcc_email   = '';//data.bcc_email;
    const subject     = 'Hello Hero';//data.subject;
    const message     = 'Nice Work';//data.content;

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
      from      : '"mYvISA" <info@inperge.com>',
      to        : to_email,
      cc        : cc_email,
      bcc       : bcc_email,
      subject   : subject,
      html      : message
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("mail send");
            res.send("success");
        }
    });  
}
  
export default sendEmail;

async function main() {
    // Generate test SMTP service account from ethereal.email
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo " <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);