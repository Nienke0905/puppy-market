const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

var storagePuppies = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: 'uploads/puppies', // The name of the folder in cloudinary
    allowedFormats: ['jpg', 'png']
  }
});

var storageUsers = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: 'uploads/users', // The name of the folder in cloudinary
    allowedFormats: ['jpg', 'png']
  }
});

const uploadCloudPuppies = multer({ storage: storagePuppies });
const uploadCloudUsers = multer({ storage: storageUsers });

module.exports = uploadCloudPuppies;
module.exports = uploadCloudUsers;