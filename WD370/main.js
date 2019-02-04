const http = require('http');
const url = require('url');

http.createServer( (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    var query = url.parse(req.url,true).query;
    res.write(JSON.stringify(query.age));
    res.end();
}).listen(3333);
console.log("Server running at http://localhost:3333/");

/*
If you open the url http://localhost:3333/?name=jason&age=30
It will display {"name":"jason","age":"30"}
*/