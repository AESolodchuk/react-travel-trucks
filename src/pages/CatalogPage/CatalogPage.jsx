import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  // const trucks = useSelector(selectFilteredTrucks);

  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <main>
      <section className={css.catalogPage}>
        <div className={css.container}>
          <div className={css.filterList}>
            <Filters />
          </div>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ul className={css.camperList}>
            {campers.map((camper) => (
              <li key={camper.id} className={css.camperItem}>
                <CatalogItem
                  camper={camper}
                  features={Object.keys(camper).filter(
                    (key) => camper[key] === true
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CatalogPage;
