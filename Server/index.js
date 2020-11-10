const express = require("express");
const bodyParser = require("body-parser");
const port = 1128;

let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());


app.get("/repos", function (req, res) {
  // TODO - your code here!
  // This route should send  back the top 25 repos
  // get information from get request - query
  // take data and look for matches in database (.find(query object))
  // returns some collection of matching data
  // Figure out what the data looks like
  // Goal: Turn into an array of repos urls
  // respond with status code of 200 and write body with the matching query
});


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
