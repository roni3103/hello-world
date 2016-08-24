var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/Bookshop'));

app.get('/page2', function (req, res) {
   res.sendFile(path.join(__dirname + '/Bookshop/basket.html'));
});


//Using a parameter called name - commented out at present
/*app.get('/:name', function(req,res) {
res.send('Hello ' + req.params.name);
});*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
