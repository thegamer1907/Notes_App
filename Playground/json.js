// var obj = {
//   name: 'Harshit'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

//
// var personString = '{"name":"Harshit","age":19}';
//
// var ob = JSON.parse(personString);
//
// console.log(typeof ob);
// console.log(ob);

const fs = require('fs');

var orignalNote = {
  title: 'Some title',
  body: 'Some body'
};

var orignalNoteString = JSON.stringify(orignalNote);

fs.writeFileSync('notes.json', orignalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
