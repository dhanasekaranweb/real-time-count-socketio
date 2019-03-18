let app = require('express')();
let bodyparser = require('body-parser');
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(bodyparser.json())

app.get('/',(req,res) => {
	console.log('hai')
	io.on('connection', (socket) => {
	  console.log('socket connected');
	  
	  socket.on('disconnect', function(){
	    console.log('socket disconnected');
	  });
	  
	  io.emit('count', {count: 1});   
	});

})

/*
http://domain:port/api/count
post method to hit the api and pass the count in "count -> params"
you have to use in real time also where to emit the count use there io.emit
the count or notification push to client
*/

app.post('/api/count',(req,res) => {
	const body = req.body
	const count = body.count
	if(count){
		io.emit('count', {count: count}); 
		res.send({"count":count})
	}
})


http.listen(3000, () => {
  console.log('started on port 3000');
});