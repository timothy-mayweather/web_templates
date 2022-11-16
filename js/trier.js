var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'timkibalama@gmail.com',
        pass: 'mayweather'
    }
});

var mailOptions = {
    from: 'timkibalama@gmail.com',
    to: 'joackimmwesigwa@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});