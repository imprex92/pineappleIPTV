const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    uploadTimestamp: {
        type: Date,
        default: Date.now,
    },
	verificationCode: {
    type: Number,
    required: true,
    min: 1000,
    max: 9999,
  },
  m3uFile: {
    data: Buffer, // Store file data as binary
    contentType: String, // Store content type (e.g., 'audio/mpeg')
  },
});
const Upload = mongoose.model('Upload', UploadSchema);

module.exports = Upload;