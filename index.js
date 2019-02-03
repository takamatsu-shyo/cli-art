#!/usr/bin/env node

/*
TODO README
TODO Option -y
Are you over eighteen and willing to see content [Y/n]? y
N: You are not in the 18+ file.  This incident will be reported.
TODO Message
Tone of this art unsuitable for minors.
TODO Option -p, -a, -m, -h
TODO Help
*/

const https = require('https');

function gen_url(genre){

	let umber, url;

	switch(genre){
		case 'p':
			// Pinup: 00-47
			number = Math.floor(Math.random() * 47)
			url = 'https://www.asciipr0n.com/pr0n/pinups/pinup' + number.toString().padStart(2,'0') + '.txt'
			break;
		
		case 'a':
			// Animation: 00-62
			number = Math.floor(Math.random() * 64)
			url = 'https://www.asciipr0n.com/pr0n/anime/anime' + number.toString().padStart(2,'0') + '.txt'
			break;
		
		case 'h':
			// Hunk: 00-08
			number = Math.floor(Math.random() * 8)
			url = 'https://www.asciipr0n.com/pr0n/hunky/hunky' + number.toString().padStart(2,'0') + '.txt'
			break;
		
		case 'm':
			// More: 00-94
			number = Math.floor(Math.random() * 94)
			url = 'https://asciipr0n.com/pr0n/morepr0n/pr0n' + number.toString().padStart(2,'0') + '.txt'
			break;
		
		default:
			url = 'https://asciipr0n.com/pr0n/pinups/venus01.txt'
	}

	return url
};

var gen_sw = ['p', 'a', 'h', 'm'];

https.get(url = gen_url(gen_sw[Math.floor(Math.random()*3)]), (resp) => {

		let data = '';

		resp.on('data', (chunk) => {
			data += chunk
		});	

		resp.on('end', () => {
			console.log(data);		
			console.log(url);		
		})

});

