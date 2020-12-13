export default function MovieDetails ({
    title,
    year,
    rated,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    ratings,
    metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    type,
    dvd,
    boxOffice,
    production,
    website
  }) {
    this.getTitle = () => title
    this.getYear = () => year
    this.getRated = () => rated
    this.getReleased = () => released
    this.getRuntime = () => runtime
    this.getGenre = () => genre
    this.getDirector = () => director
    this.getWriter = () => writer
    this.getActors = () => actors
    this.getPlot = () => plot
    this.getLanguage = () => language
    this.getCountry = () => country
    this.getAwards = () => awards
    this.getPoster = () => poster
    this.getRatings = () => ratings
    this.getMetascore = () => metascore
    this.getImdbRating = () => imdbRating
    this.getImdbVotes = () => imdbVotes
    this.getImdbID = () => imdbID
    this.getType = () => type
    this.getDvd = () => dvd
    this.getBoxOffice = () => boxOffice
    this.getProduction = () => production
    this.getWebsite = () => website
    this.toObject = () => ({
    title: this.getTitle(),
    year: this.getYear(),
    rated: this.getRated(),
    released: this.getReleased(),
    runtime: this.getRuntime(),
    genre: this.getGenre(),
    director: this.getDirector(),
    writer: this.getWriter(),
    actors: this.getActors(),
    plot: this.getPlot(),
    language: this.getLanguage(),
    country: this.getCountry(),
    awards: this.getAwards(),
    poster: this.getPoster(),
    ratings: this.getRatings(),
    metascore: this.getMetascore(),
    imdbRating: this.getImdbRating(),
    imdbVotes: this.getImdbVotes(),
    imdbID: this.getImdbID(),
    type: this.getType(),
    dvd: this.getDvd(),
    boxOffice: this.getBoxOffice(),
    production: this.getProduction(),
    website: this.getWebsite()
  })
}