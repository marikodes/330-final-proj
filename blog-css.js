//const markdownit = require('markdown-it'); //lets us parse md to html

function blogPost(){
    //get the  id of container we want to append to
    const root = document.querySelector('#md-blog-post');

    //render markdown to html
    const pageData = md.render("#test")
    //append html
    root.append(pageData);



}

blogPost();