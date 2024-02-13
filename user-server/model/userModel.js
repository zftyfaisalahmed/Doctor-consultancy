const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        trim: true,
        unique: true
    },
    gender:{
        type: String,
        trim: true,
        required: true,
    },
    problemDesc:{
        type: String,
      
    },
    patient_token:{
        type: String,
        trim: true,
        unique: true
    }

},{
    collection: "patients",
    timestamps: true
}) 

module.exports = mongoose.model("PatientInfo", PatientSchema)