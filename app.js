const express = require ('express')
const app = express ()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	console.log('Trial and error')
	res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, function (){
	console.log('App acting as port 3000! Visit localhost:3000 in Chrome')
})

