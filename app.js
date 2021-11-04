const fs = require("fs");

const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [Danika, karmadog72] = profileDataArgs;

fs.writeFile("./index.html", generatePage(Danika, karmadog72), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
