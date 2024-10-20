import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section className={css.homePage}>
        <h1 className={css.header}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.button}>
          View Now
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
