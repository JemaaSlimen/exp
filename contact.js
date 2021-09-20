let express = require ("express");
let routeer = express.Router();


routeer.get('/c.html', function(request, response, next) {
    response.send('contact');
    next()
  });


module.exports= routeer
