module.exports = function(sequelize, dataTypes) {

    /* alias */
    let alias = "Movie";

    /* configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }
    }

    /* config de la tabla */
    let config = {
        tableName: "movies",
        timestamps: false,
        underscored: true
    }

    /* definir el modelo */

    let Movie = sequelize.define(alias, cols, config)
    
    return Movie;
}