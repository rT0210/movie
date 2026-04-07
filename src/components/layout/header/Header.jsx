import { NavLink, Link} from "react-router-dom";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";
import SearchMovie from "./searchMovie/SearchMovie";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [query, setQuery] = useState("")

  const changeQuery = (e) => {
    setQuery(e.target.value)
  }

  const resetQuery = () => {
    setQuery("")
  }

  const movie = useSelector((state) => state.movies.movies)

  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[12px] md:text-[16px] h-14">
        <Link to={"/"}>
          <Logo />
        </Link>
        <SearchMovie query={query} changeQuery={changeQuery} movie={movie} resetQuery={resetQuery}/>
        <Nav>
          <NavLink to={"/"}>главная</NavLink>
          <NavLink to={"/movies"}>фильмы</NavLink>
          <NavLink to={"/movies/favorites"}>избранное</NavLink>
        </Nav>
      </div>
    </header>
  );
};
export default Header;
