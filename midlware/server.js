// const express = require("express");
// const app = express();
// const path = require ('path')



// app.use(express.static(path.join(__dirname, 'public')));

// // Set 'views' directory for any views 
// // being rendered res.render()
// app.set('views', path.join(__dirname, 'views'));

// // Set view engine as EJS
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// // replace with the directory path below ./
// app.set('views', path.join(__dirname, 'views'));




// app.set('view engine','pug');
// app.set ('views','./views');

// app.get('/accuei',(req, res)=>{
//     res.render('form');

   
// })



// app.get('/services',(req,res)=>{
//     res.send('Nos services')
    
// })

// app.get('/Contact',(req,res)=>{
//     res.send('Contactez-nous')
// })


// app.post('/a', (req, res)=>{
//     console.log(req.body);
//         res.send( "hello "+ req.body.myname);
    
//     });
    

app.listen(4000)