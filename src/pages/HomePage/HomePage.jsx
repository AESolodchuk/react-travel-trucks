import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.header}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.button}>
          View Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
