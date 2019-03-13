var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o czarodzieju",
    img: "https://ssl-gfx.filmweb.pl/ph/57/46/95746/92341.2.jpg"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    img: "https://ssl-gfx.filmweb.pl/ph/68/78/6878/213978.2.jpg"
  },
  {
    id: 3,
    title: "Leon zawodowiec",
    desc: "Film o zabójcy na zlecenie",
    img: "https://ssl-gfx.filmweb.pl/ph/06/71/671/401020.2.jpg"
  },
  {
    id: 4,
    title: "Hobbit",
    desc: "Film o niskich ludziach",
    img: "https://ssl-gfx.filmweb.pl/ph/32/17/343217/362826.2.jpg"
  },
  {
    id: 5,
    title: "Bohemian Rhapsody",
    desc: "Film o legendarnym zespole rockowym",
    img: "https://ssl-gfx.filmweb.pl/ph/92/01/619201/779620_1.2.jpg"
  },
  {
    id: 6,
    title: "Forest Gump",
    desc: "Film o człowieku, kóry nie wiedział dlaczego biegnie",
    img: "https://ssl-gfx.filmweb.pl/ph/09/98/998/182076.2.jpg"
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("h2", {}, this.props.title);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("p", {}, this.props.desc);
  }
});

var MovieImage = React.createClass({
  propTypes: {
    imgSrc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("img", {
      src: this.props.imgSrc,
      alt: "slajd z filmu"
    });
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement(
      "li",
      {},
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieDescription, { desc: this.props.movie.desc }),
      React.createElement(MovieImage, {
        imgSrc: this.props.movie.img
      })
    );
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, { key: movie.id, movie: movie });
});

var MoviesList = React.createClass({
  render: function() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Lista filmów:"),
      React.createElement("ul", {}, moviesElements)
    );
  }
});

var element = React.createElement(MoviesList, {});
ReactDOM.render(element, document.getElementById("app"));
