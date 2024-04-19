const patientModel = require('../models/patient');
const doctorModel = require('../models/doctor');

// const accountSid = 'ACa3c40160e8d1898122e40aeccdce1f46';
// const authToken = '0957c1ec3530ebc9239bfe9bb8e6ba84';

const accountSid = 'AC';
const authToken = '';

const client = require('twilio')(accountSid, authToken);

const sendMsg1 = async(req, res) => {
    console.log(req.body);
    try {

        const result2 = await patientModel.findById(req.body.patient);
        const result3 = await doctorModel.findById(req.body.doctor);
        const result = await client.messages.create({
            body: `
Hello ${result2.firstName + ' ' + result2.lastName}, Your appointment is scheduled on ${req.body.appointmentDate}. \n
Doctor: ${result3.firstName + ' ' + result3.lastName} \n
Status: ${result2.status} \n
`,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+91${result2.contactNum}`
        });
        res.status(200).json({
            message: "Message sent successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured in sendMsg.",
            flag: -1
        })
    }
}

const sendPrescription = async(req, res) => {

    try {

        const result = await client.messages.create({
            body: `
Patient Id: ${req.body.patientId} \n
Patient Name: ${req.body.patientName} \n
Doctor Name: ${req.body.doctorName} \n
-----------------------------------------------------
Sr. no. | Drug      | Frequency      | Instruction \n
-----------------------------------------------------
1       | ${req.body.m1[0]}      | ${req.body.m1[0]}      | ${req.body.m1[0]} \n
2       | ${req.body.m2[0]}      | ${req.body.m2[0]}      | ${req.body.m2[0]} \n
3       | ${req.body.m3[0]}      | ${req.body.m3[0]}      | ${req.body.m3[0]} \n
4       | ${req.body.m4[0]}      | ${req.body.m4[0]}      | ${req.body.m4[0]} \n
5       | ${req.body.m5[0]}      | ${req.body.m5[0]}      | ${req.body.m5[0]} \n
------------------------------------------------------\n
Reports: ${req.body.reports} \n
Advice: ${req.body.advice} \n
Date: ${req.body.date} \n
email: ${req.body.email} \n
            `,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+919875244000`
        });
        res.status(200).json({
            message: "Message sent successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured in sendMsg.",
            flag: -1
        })
    }
}

const sendMeetingID = async(req, res) => {
    console.log(req.body);
    try {

        const result2 = await patientModel.findById(req.body._id);
        const result = await client.messages.create({
            body: `
Doctor Name: ${req.body.doctor_name} \n
Meeting ID: 8935865 0012 \n
Passcoad: mq1bb4 \n
Numeric Passcoad: 544321 \n
Invile Lint: https://us05web.zoom.us/j/84228374697?pwd=AKIzveaztCWbls9rnsuXYUB9sf3d9f.1
`,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+91${result2.contactNum}`
        });
        res.status(200).json({
            message: "Message sent successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured in sendMsg.",
            flag: -1
        })
    }
}

const welcomeMsg = async(req, res) => {
    console.log(req.body);
    console.log(req.body.contactNum);
    try {
        const result = await client.messages.create({
            body: `
Subject: Welcome to Arna Hospital!

Dear ${req.body.firstName + ' ' + req.body.lastName},

We are delighted to welcome you to Arna Hospital! Our team is committed to providing exceptional healthcare and ensuring your well-being. To help you get started, we have enclosed a new patient registration form and a list of our services.

Please don't hesitate to reach out if you have any questions or need assistance. We look forward to serving you and being a part of your health journey.

Warm regards,

Arna Hospital
`,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+91${req.body.contactNum}`
        });
        res.status(200).json({
            message: "Message sent successfully.",
            data: result,
            flag: 1
        })
    } catch (e) {
        console.log(e);
        res.status(501).json({
            message: "Error occured in sendMsg.",
            flag: -1
        })
    }
}

module.exports = { 
    sendMsg1,
    sendPrescription,
    sendMeetingID,
    welcomeMsg
}
