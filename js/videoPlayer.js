const fs = require('fs');

const filePath = './playlists/tv_channels_fe918907_plus.m3u'

fs.access(filePath, fs.constants.F_OK, (err) => {
	if (err) {
		console.error(`File with path ${filePath} does not exist!`);
	}
	else{
		console.log("The file exists");
		fs.readFile(filePath, (err, data) => {
			if(err){
				console.error(`Error reading the file: ${err}`);
			}
			else{
				console.log(`File contents: ${data}`);
			}
		})
	}
})