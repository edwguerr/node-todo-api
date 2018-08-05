const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, res) => {
		if (err) {
			return console('Unable to insert todo', err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));
	});*/

	db.collection('Users').insertOne({
		name: 'Edward',
		age: 29,
		location: 'Berlin'
	}, (err, res) => {
		if (err) {
			return console('Unable to insert user', err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));
		console.log(res.ops[0]._id.getTimestamp());
	});

	client.close();
});