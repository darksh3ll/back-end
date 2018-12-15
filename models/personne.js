'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('Personne', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    age: DataTypes.TINYINT
  }, {});
  Personne.associate = function(models) {
    Personne.hasMany(models.Cadeau,{as:'cadeaus'})
  };
  return Personne;
};