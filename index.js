var nm = require ("nodemailer");

var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'shahid.it236@gmail.com',
            pass:'uoib wmbc ucbs vlqs'
        }
    }
);

var options={
    from:'shahid.it236@gmail.com',
    to:'skhadershahid@gmail.com',
    subject: 'testing email',
    // text: 'Hello Welcome to our application'
    html: `<h1>Heloo welcome to our appplication</h1>
    <img src='cid:food' width='200px'>
    <button>Click Here </button>
   `,
   attachments: [
       {
           filename: 'food.jpeg',
           path: "https://images.pexels.com/photos/421809/pexels-photo-421809.https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=600jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           cid: 'food'
       }
   ]


};

transporter.sendMail(
    options, function (error,info){
        if (error) {
            console.log(error)
        }
        else {
            console.log("sent")
        }

        }
    
)
