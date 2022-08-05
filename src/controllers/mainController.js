let controller = {
    home: (req, res)=>{
   res.render('index.ejs')
        /*     const fs = require('fs');
        const path = require('path');
        const postFilePath = path.join(__dirname, '/../data/postData.json');
        const postArray = JSON.parse(fs.readFileSync(postFilePath, 'utf-8'));
        res.render('index.ejs' , { 
            titlePage : "Front End Test",
            user: postArray[postArray.lenght].nameU,
            post: postArray[postArray.lenght].content,
        })*/
    },
      /*  create: (req, res)=>{
        const fs = require('fs');
        const path = require('path');
        const postFilePath = path.join(__dirname, '/../data/postData.json');
        const postArray = JSON.parse(fs.readFileSync(postFilePath, 'utf-8'));
        let newPost = {
        this.nameU: req.body.namePost,
           this.content: req.body.postBody
            };
          postArray.push(newPost);
          fs.writeFileSync(__dirname + '/../data/telosDB.json', JSON.stringify(postArray, null, ' '));
          res.redirect('/');
      },*/
    }

module.exports = controller;