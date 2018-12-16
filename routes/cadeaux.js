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
            res.json({message:`${cadeau} avec ID:${cadeau.id} a bien etait créé dans la base de données 😁 `})
        })
        .catch((err) => res.status(400).json(err))
});

// List all cadeaux inclus le nom de la personne
router.get('/',(req,res,next) => {
    Cadeau.findAll({include:'personne'})
        .then((cadeau) => {
            res.json(cadeau)
        })
        .catch((err) => res.status(500).json(err))
});

module.exports=router;