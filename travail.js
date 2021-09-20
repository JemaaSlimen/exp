const express = require("express");
const servise = require('./servise');
const accueil = require('./accueil');
// const contact = require('./contact ');
const app = express();
// app.use(express.static('public'));
const path = require ('path');
const { response } = require("express");

 app.use(express.static(path.join(__dirname,'public')))


 app.use(accueil)
app.use(servise)
// app.use(contact)



// app.get('/a.html', function(request, response, next) {
//     response.send('<h1> aceuill </h1>');
//     // res.sendFile(path.join(__dirname,'views', 'a.html'))
//     next()
//   });





  app.get('/c.html', auth, function(request, response, next) {
     response.send('contact');
    // res.sendFile(path.join(__dirname,'views', 'c.html'))
    next()
  });

function auth (request, response, next) {
if (request.query.days = samedi||dimanche === 'false'){    
next()

} else {

  response.send ('Disponible')
  
}

}




app.listen(4005);