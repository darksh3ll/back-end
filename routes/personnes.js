const express = require('express');
const router = express.Router();
const models = require('../models');
const Personne = models.Personne;

// Create
router.post('/', (req,res,next) => {
    Personne.create({
        nom:req.body.nom,
        prenom:req.body.prenom,
        age:req.body.age
    })
        .then((newPersonne) => {
            res.json({message:`${newPersonne.nom} avec ID:${newPersonne.id} a bien etait créé dans la base de données 😁 `})
        })
        .catch((err) => res.status(400).json(err))
});

// /listPersonneId
router.get('/:id', (req,res,next) => {
    Personne.findByPk(req.params.id)
        .then((personne) => {
            if (personne){
                res.json({personne})
            }
            else {
                res.status(404).json({Message:`Aucne personne n'existe avec l'id : ${req.params.id}`})
            }
        })
        .catch((err) => res.status(err).json({Message:`Erreur lors de la recherche d'une personne`,}))
});

// ListAll
router.get('/', (req,res,next) => {
   Personne.findAll()
       .then((personne) => res.json(personne))
       .catch((err) => res.status(500).json(err))
});


// Delete personne
router.delete('/:id', (req,res,next) =>{
    Personne.findByPk(req.params.id)
        .then((personne) => {
            if (personne) {
                personne.destroy()
                    .then((personne) => res.json(`${personne.nom} avec ID n°:${req.params.id} supprimé`))
            }
            else {
                res.status(404).json({Message:`Aucne personne n'existe avec l'id : ${req.params.id}`})
            }
        })
        .catch((err) => res.status(err).json({Message:`Erreur suppression d'une personne avec ${req.params.id}`,}))
});

// modifier personne
router.put('/:id',(req,res,next) => {
    Personne.findByPk(req.params.id)
        .then((personne) => {
            personne.update({
                nom:req.body.nom,
                prenom:req.body.prenom,
                age:req.body.age
            })
                .then((updatePersonne) => {
                    res.json(updatePersonne)
                })
                .catch((err) => res.status(500).json(err))

        })
        .catch((err) => res.status(500).json(err))
})
module.exports=router;