let express = require ("express");
let router = express.Router();


router.get('/b.html', function(request, response, next) {
    response.send('service');
    next()
  });


module.exports= router












// var app = express();

// app.route('/book')
//   .get(function (req, res, next) {
//     res.send('Get a random book');
//     next();

//   })
//   .post(function (req, res) {
//     res.send('Add a book');
//   })
//   .put(function (req, res) {
//     res.send('Update the book');
//   })


// router.get('/', function(req, res){
//     res.render(form.html);

// });
// router.post('/', (req, res)=>{
// console.log(req.body);
//     res.send( "hello "+ req.body.myname);

// });

// module.exports = router;


// sedfile

// var express = require('express');
// var app = express();
// // app.use(express.static('public'));

// app.get('/index.html', function(request, response) {
//   response.sendFile('./index.html');
// });
// app.listen(3006);