
const fs = require('fs');


var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try{
    var noteString = fs.readFileSync('notes.json');
    notes = JSON.parse(noteString);
  } catch (e){

  }

  var dup = notes.filter((note) => note.title === title);

  if(dup.length === 0)
  {
    notes.push(note);
    fs.writeFileSync('notes.json',JSON.stringify(notes));
    console.log('Note Added Succesfully');
  }
  else {
      console.log('Dulicate Title');
  }
};

var getAll = () => {
  try{
    var noteString = fs.readFileSync('notes.json');
    notes = JSON.parse(noteString);
    // console.log(notes);
    for(var i in notes){
      console.log(notes[i].title);
    }
  } catch (e){
    console.log('No notes to show');
  }
};

var readNote = (title) => {
  try{
    var noteString = fs.readFileSync('notes.json');
    notes = JSON.parse(noteString);
    // console.log(notes);
    // console.log(title);
    for(var i in notes){
      if(notes[i].title === title)
      {
        console.log(notes[i].body);
      }
    }
  } catch (e){
    console.log('Invalid Title');
  }
};

var removeNote = (title) => {
  try{
    var noteString = fs.readFileSync('notes.json');
    notes = JSON.parse(noteString);
    // console.log(notes);
    let ind = -2;
    for(var i in notes){
      if(notes[i].title === title)
      {
        ind = i;
      }
    }
    if(ind > -1)
    {
      notes.splice(ind, 1);
      fs.writeFileSync('notes.json',JSON.stringify(notes));
      console.log('Note Removed Succesfully');
    }
  } catch (e){
    console.log('No notes to remove');
  }
};
module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};
