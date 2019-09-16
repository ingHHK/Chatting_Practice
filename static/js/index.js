var socket = io()

socket.on('connect', function() {
	var name = prompt('Hello!', '')
	if(!name){
		name = 'unknown'
	}
	socket.emit('newUser', name)
})

socket.on('update', function(data) {
	console.log(`${data.name}: ${data.message}`)
})


function send() {
	var message = document.getElementById('test').value
	document.getElementById('test').value = ''
	socket.emit('message', {type: 'message', message: message})
}
