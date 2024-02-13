const { StatusCodes } = require("http-status-codes")
const PatientSchema = require('../model/userModel')

// read single - get ref
const readSingleFile = async (req, res) => {
    try {
        let id = req.params.id
        
        let singlePatient = await PatientSchema.findById({ _id: id})
 
 
        res.status(StatusCodes.ACCEPTED).json({ data: singlePatient})
     } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message}) 
     }
}

const userForm = async(req, res) => {
    try {
        let { name, mobile, email, gender, problem} = req.body;
        
        let newPatient = await PatientSchema.create({
            name,
            email,
            mobile,
            gender,
            problem
        })
        
        res.status(StatusCodes.OK).json({msg : `New Patient Created Successfully`, data: newPatient})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message})  
    }
}

module.exports = {readSingleFile, userForm}