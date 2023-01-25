const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname+"/signup.html");
});
app.post('/',(req,res)=>{
  console.log(req.body.FirstName);
  console.log(req.body.LastName);
  console.log(req.body.Email);

})



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});







// d49570b02499aea830d91aca5274a515-us21
