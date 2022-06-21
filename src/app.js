const yargs = require("yargs");

// import functions from index
const { addFilm, listFilms } = require("./utils/index.js")
// reminder path can be ./utils instead of ./utils/index.js

const app = (yargsObj) => {
    if (yargsObj.add) {
        addFilm({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.list) {
        listFilms();
    } else {
        console.log("Incorrect command");
    };
};

//calling function
app(yargs.argv);