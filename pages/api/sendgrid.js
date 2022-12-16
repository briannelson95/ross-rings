const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendMail(req, res) {
    try {
        console.log("REQ.BODY", req.body)
        await sgMail.send({
            to: 'dev.briannelson@gmail.com',
            from: 'dev.briannelson@gmail.com',
            html: `
                <div>
                    <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
                    <p>Message:</p>
                    <p>${req.body.message}</p>
                </div>
            `
        });
    } catch(error) {
        console.log(error)
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

export default sendMail;