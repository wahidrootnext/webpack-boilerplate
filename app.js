const express = require('express')
const app = express()
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('pages/index')
})

app.listen(app.get('port'), function() {
    console.log("Application running at http://localhost:" + app.get('port'))
})