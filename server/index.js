const express = require("express")
const mongoose = require("mongoose")
const router = require("./src/route/router")
const cors = require('cors')

const app = express()
   app.use(cors())
		app.use(express.json())	
		app.use("/api", router)
mongoose
	.connect("mongodb+srv://Denis:B!wBNm5V2!b5GHJ@cluster0.jvh0t.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		
            console.log('connected to db')
			
			const PORT = process.env.PORT || 8085;
			app.listen(PORT, () => console.log('Listening on port 8085.'));
	}).catch((error) =>{
			console.log(error);
	})
