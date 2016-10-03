var FilmApi = function(app){
  var films = [{
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  },
  {
      title: "Star Wars Episode IV: A New Hope",
      actors: ["Harrison Ford", "Alec Guiness"]
    }];
  var reviews = [{
      comment: "It's not even a thing. What just happened. I want my life back.",
      rating: 1,
      author: "Dave"
    },
    {
      comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
      rating: 100,
      author: "Steve"
    }]

  app.get("/films", function(req, res){
    res.json({data: films});
  })

  app.get("/reviews", function(req, res){
    res.json({data: reviews});
  })

  app.get("/films/:id", function(req, res){
    var filmId = req.params.id;
    res.json({data: films[filmId]});
  })

  app.get("/reviews/:id", function(req, res){
    var reviewId = req.params.id;
    res.json({data: reviews[reviewId]});
  })
}

module.exports = FilmApi;