var users = {
	"8938194721281": {
		"info": {
			"firstname": "Ibrahim",
			"lastname": "Ganiu",
			"email": "ganiuibrahim3000@gmail.com",
			"phoneNum": "+2348185502574",
			"password": "ganiu12345",
			"description": "I am the maker of the popular DAC bot",
			"profilePics": "892ualdalj.jpg"
		},
		"following": ["1829adahldj", "9wr8qp098waajhl"], // user's ids
		"follower": ["1829adahldj", "9wr8qp098waajhl"], // user's ids
		"favorites": ["/jokes/9238937829", "/quote/238u038u208uaj"], // post's ids
		"wall": {
			"author": "Daniel Adewale",
			"body": "I love your posts, keep up the good work",
			"comments": [
				{"author": "Samuel Dayo", "comment": "I love him too"},
				{"author": "Tumise Fasasi", "comment": "He is cool"}
			]
		},
		"posts": ["dalseja8298392", "dsadslahdlkj283928397"]
	}
}

module.exports = users;

module.exports.createUser = function(id, data){
	console.log('id '+id);
	users[id] = {
		"info": data
	}
}