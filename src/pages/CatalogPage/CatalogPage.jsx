import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/campersSlice";
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
  selectMaxPages,
  selectLoadMore,
} from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Filters from "../../components/Filters/Filters";
import clsx from "clsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const maxPages = useSelector(selectMaxPages);
  const loadMore = useSelector(selectLoadMore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (page < maxPages) {
      dispatch(setPage());
    }
  };

  return (
    <main>
      <section className={css.catalogPage}>
        <div className={css.container}>
          <div className={css.filterList}>
            <Filters />
          </div>
          {camperList.length === 0 && isLoading && <Loader />}
          {error && <p>{error}</p>}
          <ul className={css.camperList}>
            {camperList.map((camper) => (
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
      {loadMore && !isLoading && (
        <section className={css.loadMore}>
          <div className={clsx(css.container, css.loadMoreContainer)}>
            <button className={css.loadMoreBtn} onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default CatalogPage;
