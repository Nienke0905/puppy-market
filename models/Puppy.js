const mongoose = require("mongoose");

const puppySchema = new mongoose.Schema ({
    name: { type: String },
    gender : { type: String, enum: ['Male', 'Female'] },
    breed: { type: [String] },
    birthDate: { type: String },
    colors: { type: [String] },
    price: { type: String },
    mainPicture: { type: String },
    mainPicturePath: { type: String },
    pictures: { type: [String] },
    picturesPath: { type: [String] },
    description: { type: String },
    owner: { type: mongoose.Schema.ObjectId, ref: "User" }, 
    comments: [{
        author: { type: mongoose.Schema.ObjectId, ref: "User" },
        content: { type: String }
      }]
});
puppySchema.index({'$**': 'text'});


const Puppy = mongoose.model("Puppy", puppySchema);

module.exports = Puppy;