const Command = require('./CommandController.js');
var argv = process.argv;
const command = argv[2];
const flag = [];

for(var i = 3; i < argv.length; i++){
  flag.push(argv[i]);
}

const CommandController = new Command(command,flag);
CommandController.runCommand();

