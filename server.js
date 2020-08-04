const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const fs = require("fs")

// app.set("view engine", "html")
// app.use(express.static(path.join(__dirname, "build")))

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) => {
	res.render("chatbot")
})

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
)
