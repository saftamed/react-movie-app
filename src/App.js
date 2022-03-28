import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddModal from "./components/AddModal";
import { Button,Container } from "react-bootstrap";
import Search from "./components/Search";

function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState({});
  const handleClose = () => setShow(!show);
  const addHandle = (inputs) => {
    setMovies((m) => m.concat(inputs));
    setShow(false);
  };
  const [movies, setMovies] = useState([
    {
      title: "kingsman",
      description:
        "Une organisation d'espionnage recrute un adolescent de la rue grossier mais prometteur pour le programme de formation ultra compétitif de l'agence.",
      posterURL: "https://similaires.com/img_fr/movie/thumb/45/4839.jpg",
      rating: 5,
    },
    {
      title: "The Matrix",
      description: "Un pirate informatique découvre par de mystérieux rebelles la véritable nature de sa réalité et son rôle dans la guerre contre ceux qui la contrôlent.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      rating: 4,
    },
    {
      title: "Joker(2019)",
      description: "Arthur Fleck, un comédien affligé par des troubles mentaux, se voit mis de côté par la société. S'amorce ensuite une descente aux enfers emplie de révoltes .",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rating: 4,
    },
    {
      title: "The Godfather",
      description: "Le patriarche vieillissant d'une dynastie de la mafia New Yorkaise passe le flambeau de son empire clandestin à son fils réticent.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 3,
    },
  ]);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">MyMovies</div>
          <div className="cc">
            <Search onSearch={(s) => setSearch(s)} />
          </div>
        </div>
      </nav>
      <Container className="re">
        
      <Button className="btn" variant="primary" onClick={handleClose}>
        Add New Movie
      </Button>
      </Container>
      <AddModal handleClose={handleClose} show={show} addHandle={addHandle} />
      <MovieList
        movies={movies.filter(
          (m) =>
            m.title.search(new RegExp(search.search, "gi")) !== -1 &&
            m.rating >= search.rate
        )}
      />
    </div>
  );
}

export default App;
