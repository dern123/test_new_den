const express = require("express")
const Users = require("../models/Users") 
const router = express.Router()

router.get("/users", async (req, res) => {
	const posts = await Users.find()
	res.send(posts)
})

router.get("/users/:id", async (req, res) => {
	try {
        const user = await Users.findOne({ _id: req.params.id })
        res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})



router.post("/users", async (req, res) => {
	const post = new Users({
		userName: req.body.userName,
		userAge: req.body.userAge,
	})
	await post.save(function(err){
        if(err) return console.log("ops",err);
        res.send(post);
    });
})

router.put("/users/:id", async (req, res) => {
	try {
		const user = await Users.findOne({ _id: req.params.id })
       
		if (req.body.userName) {
			user.userName = req.body.userName
		}

		if (req.body.userAge) {
			user.userAge =req.body.userAge
		}

		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.delete("/users/:id", async (req, res) => {
	try {
		await Users.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch(e) {
		console.log(e)
		res.status(404)
		res.send({ error: "not found" })
	}
})

// router.post("/users", function (req, res) {
        
//     if(!req.body) return res.sendStatus(400);
        
//     const userName = req.body.userName;
//     const userAge = req.body.userAge;
//     const user = new Users({userName: userName, userAge: userAge});
        
//     user.save(function(err){
//         if(err) return console.log(err);
//         res.send(user);
//     });
// });

module.exports = router