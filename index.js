const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/translate', (req, res) => {
  console.log(req.body)
  res.json({target: "hola"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});