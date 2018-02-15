const Controllers = require('./controllers');

let task1 = process.argv[2]
let task2 = process.argv[3]
let task3 = process.argv[4]
let task4 = process.argv[5]

Controllers.input(task1, task2, task3, task4)
