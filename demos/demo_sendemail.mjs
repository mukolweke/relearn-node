import  transport from 'nodemailer';

let transporter = new transport.createTransport({
    service: '',
    auth: {
        username : '',
        pass: ''
    }
});

let mailOptions = {
    from: 'joker@gmail.com',
    to: 'batman@yahoo.com',
    subject: 'I will raid Gotham after dinner',
    text: 'Be ready @ 9pm for a showdown'
};

transporter.sendMail(
    mailOptions,
    (error, info)=>{
        if(error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
            
        }
    }
)