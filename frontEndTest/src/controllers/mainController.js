let controller = {
    home: (req, res)=>{
        res.render('index' , { titlePage : " WELCOME"})
    }
}

module.exports = controller;