const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, "templates"), err => {
// 	if (err) throw new Error()
// 	console.log("folder create successfully")
// })

// fs.mkdir(path.join(__dirname, "notes"), err => {
// 	if (err) throw new Error()
// 	console.log("folder create successfully")
// })


fs.writeFile(path.join(__dirname, "notes", "may.txt"), "hello world", err => {
	if (err) throw new Error()
	console.log("file create successfully")

	fs.appendFile(path.join(__dirname, "notes", "may.txt"), "hello again", err => {
		if (err) throw new Error()
		console.log("file append successfully")
		fs.readFile(path.join(__dirname, "notes", "may.txt"),"utf-8", (err, data) => {
			if (err) throw new Error()
			console.log(data)
		})
	})

})


