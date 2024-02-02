import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var blogCount = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

//post request to post a blog by a user
app.post("/blogpost",(req, res)=>{
    blogCount++;
    res.locals.data = req.body;
    res.locals.lastUpdatedTime = new Date().getHours() + ":" + new Date().getMinutes();
    // var hour = new Date().getHours()
    // var minutes = new Date().getMinutes();
    // var seconds = new Date().getSeconds();
    // setTimeout(() => {
    //     var lastUpdatedhour = new Date().getHours();
    //     var lastUpdatedminute = new Date().getMinutes();
    //     var lastUpdatedsecond = new Date().getSeconds();

    //     console.log(lastUpdatedhour+ ":" + lastUpdatedminute + ":" + lastUpdatedsecond);
        

    // }, 10000);
    // console.log(hour + ":" + minutes + ":" + seconds);
    res.render("blog-read.ejs",{count : blogCount});
    
})

//get request to invoke homepage
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
//get request to invoke post-blog page
app.get("/share",(req,res)=>{
    res.render("blog-post.ejs");
})
//get request to invoke read blog page
app.get("/readblogs",(req,res)=>{
    res.render("blog-read.ejs");
})


//starting express server
app.listen(port,()=>{
    console.log(`Server Started at port ${port}`);
})