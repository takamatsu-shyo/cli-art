#!/usr/bin/env node

const https = require('https');

let number = Math.floor(Math.random() * 64)
let url = 'https://www.asciipr0n.com/pr0n/anime/anime' + number.toString().padStart(2,'0') + '.txt'

//https.get('https://www.asciipr0n.com/pr0n/anime/anime40.txt', (resp) => {
https.get(url, (resp) => {
		let data = '';

		resp.on('data', (chunk) => {
			data += chunk
		});	

		resp.on('end', () => {
			console.log(data);		
			console.log(url);		
		})

});

