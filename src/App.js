import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import Home from "./components/Home";
import { movieData } from "./data";

function App() {
  const [movies, setMovies] = useState(movieData);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/description/:id"
            element={<Description movies={movies} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
