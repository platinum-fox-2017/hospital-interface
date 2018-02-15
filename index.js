
const Controller = require ('./controller.js')

let argv = process.argv

let syntax1 = argv[2]
let syntax2 = argv[3]
let syntax3 = argv[4]
let syntax4 = argv[5]

Controller.checkSyntax(syntax1, syntax2, syntax3, syntax4)