import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => (
  <>
    <nav className={css.nav}>
      <NavLink to="/" className={css.logo}>
        <svg className={css.logo}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>
      <div className={css.wrapper}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  </>
);

export default Navigation;
