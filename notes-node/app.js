

console.log('starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

//var res = notes.addNote();
//console.log(res);

console.log(notes.add(5, 4));

//var user = os.userInfo();

//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`);

