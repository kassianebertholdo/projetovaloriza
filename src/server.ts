import express from 'express';


const app = express();



app.get("/test",(request,response) => {
    return response.send("olá nlw");
});

app.post("/test-post",(request,response )=>{
    return response.send("ola post");
});




app.listen(3000,() => console.log("server is running"));