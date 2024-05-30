const fs = require("fs");

const get_notes = () => fs.readFileSync("./notes.txt")

module.exports = {
    get_notes
}