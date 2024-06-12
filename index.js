const http = require('http')

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.end(`
		<h1>Send Email</h1>
		<form action="/" method="POST">
			<label for="name">Name</label>
			<input type="text" id="name" name="name">
			<label for="email">Email</label>
			<input type="email" id="email" name="email">
			<button type="submit">Submit</button>
		</form>
		`)
	} else if (req.method === 'POST') {
		res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
		const email = []
		
		req.on("data", (data) => {
			email.push(Buffer.from(data))
		})
		req.on("end", () => {
			const massage = email.toString().split('=')[1]
			res.end(`Thank you for your email ${massage}`)
			
		})
		
		
	}
})

server.listen(8000, () => {
	console.log("server's port 8000")
})
