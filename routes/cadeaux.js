const express = require('express');
const router = express.Router();
const models = require('../models');
const Cadeau = models.Cadeau;
// Create
router.post('/', (req,res,next) => {
   Cadeau.create({
        titre:req.body.titre,
        price:req.body.price,
        personneId:req.body.personneId
    })
        .then((cadeau) => {
            res.json({message:`${cadeau}  avec ID:${cadeau.id} a bien etait créé dans la base de données 😁 `})
        })
        .catch((err) => res.status(400).json(err))
});



module.exports=router;