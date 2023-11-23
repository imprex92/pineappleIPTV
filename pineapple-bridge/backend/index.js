require('dotenv').config()
const mongoose = require('mongoose');
const Upload = require('./dbSchema/uploadModel')

// For backend and express
const express = require('express');
const app = express();
const multer = require('multer');
const cors = require("cors");

const url = `mongodb+srv://${process.env.REACT_MONGO_USER}:${process.env.REACT_MONGO_PASSWORD}@pineapplecluster.xvmsfvt.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const storage = multer.memoryStorage();
const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (file.originalname.endsWith('.m3u')) {
			cb(null, true);
		} else {
			if (!file.originalname.endsWith('.m3u')) {
				cb(new Error('File type not supported!'), false);
			} else {
				cb(new Error('Unknown error'), false);
			}
		}
	}
}) 

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});

app.post("/upload", upload.single('m3uFile'), async (req, res) => {
	try {
		const { email, verificationCode } = req.body;
		const fileData = req.file.buffer;
		const contentType = req.file.mimetype;
		
		const newUpload = new Upload({
			email,
			verificationCode,
			m3uFile: {
				data: fileData,
				contentType
			}
		})

	    await newUpload.save();

		res.status(200).json({ message: 'Upload successful!' });

	} catch (error) {
		console.error(error);
    	res.status(500).json({ error: 'Internal Server Error' });
	}

})
 
app.listen(5000);