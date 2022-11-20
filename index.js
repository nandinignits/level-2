const http=require("http");
const fs=require("fs");
let homeContent="";
let projectContent="";
let registrationContent="";
// eslint-disable-next-line no-undef
const args = require("minimist")(process.argv.slice(2));
fs.readFile("home.html",(err,home)=>{
    if(err){ throw err};
    homeContent=home.toString();
});
fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    projectContent=project.toString();
});
fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    registrationContent=registration.toString();
});
http.createServer((req,res)=>{
    let url=req.url;
    res.writeHead(200,{"content-type":"text/html"});
    switch(url)
    {
        case "/registration":
            res.write(registrationContent);
            res.end();
            break;
        case "/project":
            res.write(projectContent);
            res.end();
            break;

        default:res.write(homeContent);
        res.end();
        break;
    }
}).listen(args["port"]);