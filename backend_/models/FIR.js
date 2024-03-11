const mongoose = require("mongoose");
const firSchema = new mongoose.Schema({
    
    complainant: {
      name: String,
      contactInformation: {
        phoneNumber: String,
        emailAddress: String
      },
      address: String,
      identification: String
    },
    incidentDetails: {
      dateTime: Date,
      location: String,
      typeOfCrime: String,
      description: String
    },
    witnessInformation: [{
      name: String,
      contactInformation: {
        phoneNumber: String,
        emailAddress: String
      }
    }],
    suspectInformation: {
      name: String,
      description: String,
      relationshipToComplainant: String,
      contactInformation: {
        phoneNumber: String,
        emailAddress: String
      }
    },
    evidenceDocuments: {
      documents: [String],
      physicalEvidence: [String]
    },
    policeStationInformation: {
      jurisdictionalPoliceStation: String,
      contactInformation: String
    },
    additionalDetails: String,
    declaration: {
      accuracyStatement: Boolean,
      consent: Boolean
    } 
  });
const FIR = mongoose.model('FIR', firSchema);
module.exports = FIR;