const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3001;

/* config... */
app.use(express.json());

const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/hms');
db.then(() => {
    console.log("Database is connected.");
}).catch((err) => {
    console.log("Error occured");
    console.log(err);
})

/* ------------------- Getting roleRoute and providing to server------------------- */
const roleRoute = require('./routes/roleRoute');
app.use('/role', roleRoute);

/* ------------------- Getting patientRoute routes and providing to server------------------- */
const patientRoute = require('./routes/patientRoute');
app.use('/patient', patientRoute);


/* ------------------- Getting opdpatientRoute routes and providing to server------------------- */
const opdpatientRoute = require('./routes/opdpatientRoute');
app.use('/opdpatient', opdpatientRoute);

/* ------------------- Getting rateTypeRoute routes and providing to server------------------- */
const rateTypeRoute = require('./routes/rateTypeRoute');
app.use('/rateType', rateTypeRoute);

/* ------------------- Getting departmentRoute routes and providing to server------------------- */
const departmentRoute = require('./routes/departmentRoute');
app.use('/department', departmentRoute);

/* ------------------- Getting rateListRoute and providing to server------------------- */
const rateListRoute = require('./routes/rateListRoute');
app.use('/rateList', rateListRoute);

/* ------------------- Getting packageRoute and providing to server------------------- */
const packageRoute = require('./routes/packageRoute');
app.use('/package', packageRoute);

/* ------------------- Getting materialRoute and providing to server------------------- */
const materialRoute = require('./routes/materialRoute');
app.use('/material', materialRoute);

/* ------------------- Getting itamRoute and providing to server------------------- */
const itemRoute = require('./routes/itemRoute');
app.use('/item', itemRoute);

/* ------------------- Getting packageItemRoute and providing to server------------------- */
const packageItemRoute = require('./routes/packageItemRoute');
app.use('/packageItem', packageItemRoute);

/* ------------------- Getting packageRateListRoute and providing to server------------------- */
const packageRateListRoute = require('./routes/packageRateListRoute');
app.use('/packageRateList', packageRateListRoute);

/* ------------------- Getting serviceTypeRoute and providing to server------------------- */
const serviceTypeRoute = require('./routes/serviceTypeRoute');
app.use('/serviceType', serviceTypeRoute);

/* ------------------- Getting doctorRoute and providing to server------------------- */
const doctorRoute = require('./routes/doctorRoute');
app.use('/doctor', doctorRoute);

/* ------------------- Getting doctorDocumentRoute and providing to server------------------- */
const doctorDocumentRoute = require('./routes/doctorDocumentRoute');
app.use('/doctorDocument', doctorDocumentRoute);

/* ------------------- Getting employeeRoute and providing to server------------------- */
const employeeRoute = require('./routes/employeeRoute');
app.use('/employee', employeeRoute);

/* ------------------- Getting appointmentStatusRoute and providing to server------------------- */
const appointmentStatusRoute = require('./routes/appointmentStatusRoute');
app.use('/appointmentStatus', appointmentStatusRoute);

/* ------------------- Getting appointmentRoute and providing to server------------------- */
const appointmentRoute = require('./routes/appointmentRoute');
app.use('/appointment', appointmentRoute);

/* ------------------- Getting paymentRoute and providing to server------------------- */
const paymentRoute = require('./routes/paymentRoute');
app.use('/payment', paymentRoute);

/* ------------------- Getting allUsersRoute and providing to server------------------- */
const allUsersRoute = require('./routes/allUsersRoute');
app.use('/allusers', allUsersRoute);

const uploadRoutes = require('./routes/UploadRoutes');
app.use('/uploadfile', uploadRoutes);

/* ------------------- Getting prescriptionRoute and providing to server------------------- */
const prescriptionRoute = require('./routes/prescriptionRoute');
app.use('/prescription', prescriptionRoute);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})