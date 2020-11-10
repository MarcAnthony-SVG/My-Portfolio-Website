// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.on('open', function() {
// 	console.log('successful connection');
// })

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
//   // this will contain the properties that each repo instance will have
//   repo_id: Number, // id
//   repo_name: String, // name
//   url: {type: String, unique: true}, // html_url
//   forks: String // forks
// });

// // this line creates a model called Repo and connects it to the repoSchema
// // this model will be used to make repo instances (documents) in the db
// let Repo = mongoose.model('Repo', repoSchema);

// let save = (repo) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to the MongoDB
//   let newRepo = new Repo({
//   	repo_id: repo.repo_id,
//   	repo_name: repo.repo_name,
//   	url: repo.url,
//   	forks: repo.forks
//   }).save((err, data) => {
//   	if (err) {
//   		console.log('Error', err);
//   	} else {
//   		console.log('Success');
//   	}
//   });
// };

// module.exports.save = save;

