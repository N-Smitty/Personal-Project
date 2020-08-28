const nodemailer = require('nodemailer');
const {EMAIL, PASSWORD} = process.env;


module.exports = {
    email: async(req, res) => {
        console.log('mail hit1')
        // try/catch is used to handle errors without the use of .then and .catch
        try {
            //The transporter is essentially the email that you are using to send
            //emails to your users. This is done using NodeMailers createTransport
            //method, passing it an object containing the information needed to 
            //sign into the email.
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let info = await transporter.sendMail({
                from: `Nathan Smith<${EMAIL}>`,
                to: req.session.user.user_email,
                subject: 'Thanks for Registering!',
                text: 'This is a NodeMailer Test',
                html: 
                `<div>
                    <h1>WELCOME TO Better Bulldogs Co</h1>
                    <p>Hello ${req.session.user.username},</p>
                    <p>We are so happy you have joined our bulldog family.</p>
                </div>
                       <img src="cid:unique@nodemailer.com"/>`,
                attachments: [
                    {
                        filename: 'license.txt',
                        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                    },
                    {
                        cid: 'unique@nodemailer.com',
                        path: 'https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg'
                    }
                ]
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    } 
}