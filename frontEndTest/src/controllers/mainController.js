let controller = {
    home: (req, res)=>{
        res.render('index' , { titlePage : "Front End Test"})
    }
}

module.exports = controller;