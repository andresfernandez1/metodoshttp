/* 1er paso: Exportar function */
module.exports = function(sequelize, dataTypes){

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */
    let alias = 'Genre';

    /* 3er paso : Es crear una variable con la extructura de la tabla */
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type: dataTypes.INTEGER,
        },
        ranking:{
            type: dataTypes.DATE,
        },
        active:{
            type: dataTypes.INTEGER,
        },
    };

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        table:'genres',
        timestamps: false,
        underscore: true,
    };

    /* 5to paso : crear el metodo define() con los 3 parametros */
    const Genre = sequelize.define(alias,cols,config);

    /* 6to retornar el valor del modelo */
    return Genre;
}