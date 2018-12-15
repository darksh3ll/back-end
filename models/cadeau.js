'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cadeau = sequelize.define('Cadeau', {
        titre: DataTypes.STRING,
        price: DataTypes.FLOAT,
        personneId: DataTypes.INTEGER
    }, {});
    Cadeau.associate = function(models) {
        Cadeau.belongsTo(models.Personne, {foreignKey:'personneId', as: 'personne'})
    };
    return Cadeau;
};

