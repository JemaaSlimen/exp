
let express = require ("express");
let routerr = express.Router();


routerr.get('/a.html', function(request, response, next) {
    response.send('accueil');
    next()
  });


module.exports= routerr


































// const express = require('express');
// const app = express();
// const port = 4001;

// app.use(express.urlencoded());

// // app.get('/', function(req, res){
// //     res.render(form.html);

// // });
// // app.post('/', (req, res)=>{
// // console.log(req.body);
// //     res.send( "hello "+ req.body.myname);

// // });


// // let routes = require('./route');
// // app.use('/',routes)


// app.get('/name/:world', function(req,res) {
//     res.status(200);
//     res.set('Content-type', 'text/html');
//     res.send('<html><body>' +
//     '<h1>Hello ' + req.params.world + '</h1>' +
//     '</body></html>'
//     );
//   });
  


//   app.get('/', function(req, res){
//     res.end('Hello World');
// });
// // use url : /index?name=joulia
// app.get('/index', function(req, res){
//     res.end(`hi ` + req.query.name);
// });

// // use param

// app.get('/index/:name', function(req, res){
//     res.end(`hi ` + req.params.name);
// });



// app.listen(port, function(){
//   console.log('The server is running, ' +
//       ' please, open your browser at http://localhost:', 
//       port);
// });



// mag exemle sendfile pour windows

// const express = require('express');
// const app = express();


// app.get('/',(req, res, next) => {
//     res.sendFile(__dirname + '\\views\\doc.html')
// })

// app.listen(3000);

// exmple 2 sendfile

// const express = require('express');
// const app = express();
// const path = require ('path');

// app.use(express.static(path.join(__dirname,'views')))

// app.get('/',(req, res, next) => {
//     res.sendFile(path.join(__dirname,'views', 'doc.html'))
// })

// app.listen(3000);
