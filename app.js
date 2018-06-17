

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

// console.log(process.argv);
const tobj = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};

const argv = yargs
    .command('add' , 'Add a new note', {
      title: tobj,
      body: {
        describe: 'The body of the note',
        demand: true,
        alias: 'b'
      }
    })
    .command('list', 'Lists all notes')
    .command('read', 'To read a particular note',{
      title: tobj
    })
    .command('remove', 'To remove a particular note',{
      title: tobj
    })
    .help()
    .argv;
var command = argv._[0];
// console.log(argv);

if (command === 'add'){
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command Not Recognised');
}
