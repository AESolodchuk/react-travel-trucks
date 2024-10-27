import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ to, text, padd }) => {
  const classes = clsx(css.button, css[padd]);

  return (
    <Link to={to} className={classes}>
      {text}
    </Link>
  );
};

export default Button;
