const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public', {
    setHeaders: function(res, path) { res.set("Cache-Control", "no-cache"); }
}));


app.post('/contact', (req,res)=>{
    let transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port: 587,
      secure: false,
      auth:{
        user: 'david.gleason.portfolio@gmail.com',
        pass: ';LpJ/8NFLD8qn[]_'
      },
      tls:{
        rejectUnauthrized: false
      }
    });
    let mailOptions={
      from: 'david.gleason.portfolio@gmail.com',
      to: 'dgleason1990@gmail.com',
      subject: 'Message from ' + req.body.name + ' at email ' + req.body.email,
      text: req.body.message
    };
    transporter.sendMail(mailOptions, (err, info)=>{
      if (err){
        return console.log(err)
      }
      console.log('Message was Sent');
      console.log(info)
    })
    res.send('thanks')
})


app.listen(process.env.PORT || 8080)