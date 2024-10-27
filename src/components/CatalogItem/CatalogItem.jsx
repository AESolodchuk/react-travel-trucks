import Button from "../../components/Button/Button";
import FeatureList from "../FeaturesList/FeaturesList";
import sprite from "../../assets/sprite.svg";
import css from "./CatalogItem.module.css";

const CatalogItem = ({
  camper: { id, name, price, gallery, location, description, rating, reviews },
  features,
}) => {
  return (
    <>
      <img src={gallery[0].thumb} alt="name" className={css.image} />
      <div className={css.itemWrapper}>
        <div>
          <div className={css.titleWrapper}>
            <p className={css.title}>{name}</p>
            <div className={css.amountwrapper}>
              <p className={css.price}>{`€${price}.00`}</p>
              <svg className={css.favIcon}>
                <use href={`${sprite}#icon-fav`} />
              </svg>
            </div>
          </div>
          <div className={css.RatLocWrapper}>
            <div className={css.contentWrapper}>
              <svg className={css.ratingIcon}>
                <use href={`${sprite}#icon-rating`} />
              </svg>
              <p
                className={css.reviews}
              >{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div className={css.contentWrapper}>
              <svg className={css.locationIcon}>
                <use href={`${sprite}#icon-location`} />
              </svg>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <FeatureList features={features} />
        <Button to={`${id}/features`} text="Show more" padd="catalogItem" />
      </div>
    </>
  );
};

export default CatalogItem;
