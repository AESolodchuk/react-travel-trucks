import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { useDispatch } from "react-redux";
// import { CatalogItem } from "../../components/CatalogItem/CatalogItem";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
};

export default CatalogPage;
