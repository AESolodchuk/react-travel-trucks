import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  // const trucks = useSelector(selectFilteredTrucks);

  const campers = useSelector(selectCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main>
      <section className={css.catalogPage}>
        <div className={css.filterList}></div>
        <ul className={css.list}>
          {campers.map(
            ({ id, name, price, reviews, location, description }) => {
              return (
                <li key={id} className={css.camperList}>
                  <CatalogItem
                    name={name}
                    price={price}
                    reviews={reviews}
                    location={location}
                    description={description}
                  />
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
};

export default CatalogPage;
