const data = { 
    lista: [
        {
          id: 1,
          title: "Avatar",
          rating: "7.9",
          awards: 3,
          release_date: "2010-10-04",
          length: 120,
          genre_id: 5
        },
        {
          id: 2,
          title: "Titanic",
          rating: "7.7",
          awards: 11,
          release_date: "1997-09-04",
          length: 320,
          genre_id: 3
        },
        {
          id: 3,
          title: "La Guerra de las galaxias: Episodio VI",
          rating: "9.1",
          awards: 7,
          release_date: "2004-07-04",
          length: 150,
          genre_id: 5
        },
        {
          id: 4,
          title: "La Guerra de las galaxias: Episodio VII",
          rating: "9.0",
          awards: 6,
          release_date: "2003-11-04",
          length: 180,
          genre_id: 5
        },
        {
          id: 5,
          title: "Parque Jurasico",
          rating: "8.3",
          awards: 5,
          release_date: "1999-01-04",
          length: 270,
          genre_id: 5
        }
      ],
      filtrarPorID: function(idBuscado) {
        let resultado =  {};
        for (let i = 0; i < this.lista.length; i++) {
          if (this.lista[i].id == idBuscado) {
            resultado = this.lista[i];
          }
          
        }

        return resultado;
      }
    
}

module.exports = data;