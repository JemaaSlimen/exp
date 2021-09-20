// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// const server = http.createServer((req,res)=>{
//     const path=url.parse(req.url).pathname;
//     switch(path){
//         case '/' :
//             afficherPage('./about.html',res)
//             break
//         case 'contact' :
//             afficherPage('./contact.html',res)
//             break
//         case 'listeCours' :
//             afficherPage('./listeCours.html',res)
//             break
//         case 'user' :
//             afficherPage('./user.html',res)
//             break
//         default:
//             res.end('Page non trouvée')
//             break
//     }
    
// });
// server.listen(3002,()=>{
//     console.log('Server running')
// })

// function afficherPage(path,res){
//     fs.readFile(path,null,(error,data)=>{
//         if(error){
//             res.end('Page non trouvée')
//         }else{
//             res.end(data)
//         }
//     })

// }