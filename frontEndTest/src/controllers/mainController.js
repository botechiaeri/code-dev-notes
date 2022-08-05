let controller = {
    home: (req, res)=>{
        res.render('index.ejs' , { titlePage : "Front End Test"})
    }
}

module.exports = controller;