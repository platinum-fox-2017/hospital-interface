
let Controller = require('./controller.js')
let argv = process.argv

// let control_process = new Controller()
Controller.readCommand(argv)
// register <name> <position> <username> <password>

module.exports = argv
