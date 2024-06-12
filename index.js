const http = require('http')

const server = http.createServer((req, res) => {
	//req - serverga so'rov
	//res - server javobi
	console.log(req.url)
	
	res.write("<h2>hello 3</h2>")
	res.end()
})

server.listen(8000, () => {
	console.log("server's port 8000")
})
