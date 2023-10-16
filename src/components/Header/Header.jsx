import "./Header.css";
import logo from "../../assets/logo.png";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        
        <NavLink></NavLink>
        <img src={logo} className="logo" alt="imagen de un ojo" />

        <h1 className="nombreTienda">
          <Link className="nombre" to="/">LA OPTICA</Link>
        </h1>

        <nav className="navbar">
           <NavLink className="navbarLink" to="/">Home</NavLink>
           <NavLink className="navbarLink" to="/categoria/2">Lentes de sol</NavLink>
           <NavLink className="navbarLink" to="/categoria/4">Lentes de contacto</NavLink>
        </nav>
       
        <ShoppingCart />
      </div>
    </header>
  );
};
