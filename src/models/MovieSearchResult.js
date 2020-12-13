export default function MovieSearchResult ({title, year, imdbID, type, poster}) {
  this.getTitle = () => title
  this.getYear = () => year
  this.getImdbID = () => imdbID
  this.getType = () => type
  this.getPoster = () => poster
  this.toObject = () => ({
    title: this.getTitle(),
    year: this.getYear(),
    imdbID: this.getImdbID(),
    type: this.getType(),
    poster: this.getPoster()
  })
}