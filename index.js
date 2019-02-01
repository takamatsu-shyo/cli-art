#!/usr/bin/env node

const https = require('https');



https.get('https://www.asciipr0n.com/pr0n/anime/anime40.txt', (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk
		});	

		resp.on('end', () => {
			console.log(data);		
		})
});

