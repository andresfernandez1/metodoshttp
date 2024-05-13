/* const db = require('../db/data'); */ /* sacar */

const db = require("../database/models");

const indexController = {
  index: function (req, res) {
    let filtrado = {
     /*  where: [{awards: 1}, {length: 120}] */
     /* order: [["title", "ASC"]],
     limit: 2,
     offset: 1 */
    };

    db.Movie.findAll(filtrado)
      .then(function (results) {
        return res.render("movies", {listaPeliculas: results})
      })
      .catch(function (error) {
        return console.log(error);;
      });
  },
  detalle: function (req, res) {
    let idPelicula = req.params.idPelicula;

    db.Movie.findByPk(idPelicula)
    .then(function(result) {
        return res.render("detalleMovies", {movie: result})
      })
      .catch(function(error) {
        return console.log(error);;
    });

    
  },
  mostrarForm:function (req,res) {
    return res.render("registerMovie")
   

    /* return res.render("detalleMovies", { movie:  }); */
  },
  store:function (req,res) {
    // return res.send(req.body)
    let form = req.body;
    db.Movie.create(form)
    .then(function (result) {
        return res.redirect("/movies")
    })
    .catch(error=>console.log(error))}
 ,
 edit:function (req,res) {
  let id = req.params.id;
  // return res.send(id)
  db.Movie.findByPk(id)
  .then(function (result) {
      // return res.send(result)
      res.render("updateMovie",{movie:result})
  })
  
},
update:function (req,res) {
  // return res.send(req.body)
  let form = req.body
  db.Movie.update(form, {where:[{id:form.id}]})
  .then(function (resultado) {
    return res.redirect("/movies/id/"+form.id)
    
  }).catch(function (error) {
    console.log(error);
  })
},del:function (req,res) {
    let id = req.body.id;
    let filtro={
      where:[{id:id}]
    }
    db.Movie.destroy(filtro).then(function (params) {
        return res.redirect("/movies")
    }).catch()

}
};

module.exports = indexController;
