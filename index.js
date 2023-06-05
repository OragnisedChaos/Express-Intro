const express = require('express');
const app = express();
// console.dir(app);
// app.use((req,res)=>{
//     console.log("We got a new request")
//     // res.send("We got your request");
//     // res.send('<h1>This is my webpage</h1>');
// })
// cats=> 'meow
// dogs=>woof
//  '/' homepage
app.get('/r/:subreddit',(req,res)=>{ //we match matter
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);

})
app.get('/cats',(req,res)=>{
    res.send('<h1>MEOW!!!</h1>')
})
app.get('/dogs',(req,res)=>{
    res.send('<h1>WOFF!!</h1>')
})
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO BILLI AND KUTTA!!!</h1>')
})

app.listen(3000,()=>{
    console.log("listening on 3000");
})
app.get('*',(req,res)=>{ //Generic response incase nothing matches
    res.send('THIS REQUEST DOES NOT EXIST');
})