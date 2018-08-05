const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b67395889241b1cc9ec3c01')
	}, {
		$set: {
			name: 'Edward'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(JSON.stringify(res, undefined, 2));
	});

	/*client.close();*/
});