import "./App.css";
import Header from "./components/Header/Header";
import Discover from "./components/Discover/Discover";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MuvizDetails from "./pages/MuvizDetails";

function App() {
  const [genres, SetGenres] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=52291c7d63b8c123354a244384d96744&language=en-US`
      );

      SetGenres(result.data.genres);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Discover genres={genres} />}></Route>
          <Route path="/:movieId" element={<MuvizDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
