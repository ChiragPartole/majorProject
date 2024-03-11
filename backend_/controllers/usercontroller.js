const UserModel = require("../models/User");
const FIRModel = require("../models/FIR");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config()
exports.signup = async(req,res) => {
    const {name,email,password} = req.body;
    try {
        let userPresent = await UserModel.findOne({email : email});
        if (userPresent){
            return res.status(400).json({message : "User already exists"})
        }
        userNew = new UserModel({
            _id: new mongoose.Types.ObjectId(),
            name : name,
            email : email,
            password : password
        })
        const salt = await bcrypt.genSalt(10);
        userNew.password = await bcrypt.hash(password,salt);
        await userNew.save()
        .then((saved,err)=>{
            if (saved){
                return res.status(200).json({message : "User Created"})
            }
            if (err){
                return res.status(400).json({message : "User could not be created"})
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Error while signing up the user"})
    }
}
exports.login = async(req,res) => {
    const {email,password} = req.body;
    try {
        let userPresent = await UserModel.findOne({email : email});
        if (!userPresent){
            return res.status(400).json({message : "User doesn't exist"});
        }
        const isMatch = await bcrypt.compare(password,userPresent.password);
        if(!isMatch){
            return res.status(400).json({message : "Incorrect password"});
        }
        const payload = {user_ : {id : userPresent._id}}
        jwt.sign(payload,process.env.JWT_KEY,{expiresIn : 3600},(err,token)=>{
            if (err) throw err;
            res.status(200).json({isUser: true,token : token})
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({messsage : "Server error"})
    }
}
exports.addfir = async (req, res) => {
    try {
        // Extract FIR data from request body
        const {
            complainant,
            incidentDetails,
            witnessInformation,
            suspectInformation,
            evidenceDocuments,
            policeStationInformation,
            additionalDetails,
            declaration
        } = req.body;

        // Create a new ObjectId for the FIR
        const newId = new mongoose.Types.ObjectId();

        // Create a new FIR document with _id
        const newFIR = new FIRModel({
            _id: newId,
            complainant,
            incidentDetails,
            witnessInformation,
            suspectInformation,
            evidenceDocuments,
            policeStationInformation,
            additionalDetails,
            declaration
        });

        // Save the new FIR document to the database
        await newFIR.save();

        // Respond with success message
        res.status(201).json({ message: "FIR created successfully", FIR: newFIR });
    } catch (error) {
        console.error(error);
        // If an error occurs, respond with a server error message
        res.status(500).json({ message: "Server error" });
    }
};