const md = require('markdown-it')({
  breaks: true
}); //lets us parse md to html
const express = require('express');
const app = express();
const port = 3000;
//const md = markdownit();
const fs = require('fs'); //gives us access to file system

app.engine('html', require('ejs').renderFile);//this is a template rendering module for html

app.use(express.static('./'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/resume', function (req, res) { //req - client asks server for something; res - server sends data to client
  fs.readFile("assets/markdown/resume.md", "utf-8", (err, result) => {
    // console.log(md.render(result)); 
    //result - data from file read
    //res.send - raw data
    //res.render - <%= data %> (variable access syntax) - populates data
    res.render('resume.html',{'data': md.render(result)}); //send data to front end
  });
  //res.render(, {'data': "some"});
});

app.get('/blog', function (req, res) {
  res.render('blog.html');
});

app.get('/projects', function (req, res) {
  res.render('projects.html');
});

app.get('/contact', function (req, res) {
  res.render('contact.html');
});

app.get('/css', function (req, res) { //req - client asks server for something; res - server sends data to client
  fs.readFile("assets/markdown/blog/css.md", "utf-8", (err, result) => {
    // console.log(md.render(result)); 
    //result - data from file read
    //res.send - raw data
    //res.render - <%= data %> (variable access syntax) - populates data
    res.render('blog-css.html',{'data': md.render(result)}); //send data to front end
  });
  //res.render(, {'data': "some"});
});

app.get('/future', function (req, res) { //req - client asks server for something; res - server sends data to client
  fs.readFile("assets/markdown/blog/future.md", "utf-8", (err, result) => {
    // console.log(md.render(result)); 
    //result - data from file read
    //res.send - raw data
    //res.render - <%= data %> (variable access syntax) - populates data
    res.render('blog-future.html',{'data': md.render(result)}); //send data to front end
  });
  //res.render(, {'data': "some"});
});

app.get('/jitterdraw', function (req, res) { //req - client asks server for something; res - server sends data to client
  fs.readFile("assets/markdown/projects/jitterdraw.md", "utf-8", (err, result) => {
    // console.log(md.render(result)); 
    //result - data from file read
    //res.send - raw data
    //res.render - <%= data %> (variable access syntax) - populates data
    res.render('projects-jitterdraw.html',{'data': md.render(result)}); //send data to front end
  });
  //res.render(, {'data': "some"});
});

app.get('/adobe', function (req, res) { //req - client asks server for something; res - server sends data to client
  fs.readFile("assets/markdown/projects/adobeaddon.md", "utf-8", (err, result) => {
    // console.log(md.render(result)); 
    //result - data from file read
    //res.send - raw data
    //res.render - <%= data %> (variable access syntax) - populates data
    res.render('projects-adobe.html',{'data': md.render(result)}); //send data to front end
  });
  //res.render(, {'data': "some"});
});






// app.get('/blog-css', function (req, res) {
//   fs.readFile("assets/markdown/resume.md", "utf-8", (err, result) => {
//     console.log(md.render(result));
//     res.send(md.render(result));
//   });
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

