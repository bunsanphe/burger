const router = require("express").Router();

const Burger = require("../models/burger")

router.get("/", (req, res) => {
    Burger.all("*", (results) => {
        res.render("index", {
            burgers: results
        })
    })
});

router.post("/api/burgers", (req,res) => {
    Burger.create(req.body, (results) => {
        console.log(results)
        res.json( {id: results.insertId } );
    })
})

router.put("/api/burgers/:id", (req, res) => {
    Burger.update(req.body, req.params.id, (results) => {
        res.end();
    })
    
})



module.exports = router; 