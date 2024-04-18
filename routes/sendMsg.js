const router = require('express').Router();
const whatsappUtil = require('../util/WhatsappUtil');

router.post('/appointment', whatsappUtil.sendMsg1);
router.post('/prescription', whatsappUtil.sendPrescription);
router.post('/meetingid', whatsappUtil.sendMeetingID);
router.post('/welcomemsg', whatsappUtil.welcomeMsg);

module.exports = router;