const fs = require('fs');
const utils = require('./utils')
const notes = require("./notes")
const validator = require("validator");
fs.writeFileSync("notes.txt", "welcome to the node js class")  // this Fn will create a file and overwrite all existing data.

fs.appendFileSync("notes.txt", ", thanks for joining.") // this Fn only append the data at the end in the file.
console.log(validator.isEmail("a@a.com"))
console.log(validator.isMobilePhone("9876543211"))

console.log(utils.name)
console.log(utils.add_nums(2,4))
console.log(notes.get_notes().toString())