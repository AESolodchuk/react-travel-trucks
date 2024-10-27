import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocation,
  selectVehicleEquipment,
  selectVehicleType,
} from "../../redux/selectors";

import {
  setLocation,
  setVehicleEquipment,
  setVehicleType,
} from "../../redux/filterSlice";
import css from "./Filters.module.css";

const vehicleTypeArray = ["Van", "Fully Intergated", "Alcove"];

const Filters = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);

  const vechicleEquipment = useSelector(selectVehicleEquipment);
  const vehicleType = useSelector(selectVehicleType);

  const handleChangeVehicleEquipment = (item) => {
    dispatch(setVehicleEquipment(item));
  };

  const handleOnchangeLocation = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleChangeVehicleType = (item) => {
    dispatch(setVehicleType(item));
  };

  return (
    <>
      <label className={css.locationLabel} htmlFor="location">
        Location
      </label>
      <input
        value={location}
        className={css.locationInput}
        onChange={handleOnchangeLocation}
        placeholder="City"
        id="location"
      />

      <p className={css.filtersLabel}>Filters</p>
      <p className={css.title}>Vehicle equipment</p>
      <ul className={css.equipmentList}>
        {Object.keys(vechicleEquipment).map((item) => (
          <li
            key={item}
            onClick={() => handleChangeVehicleEquipment(item)}
            className={
              css.equipmentItem +
              (vechicleEquipment[item] ? " " + css.isActive : "")
            }
          >
            <svg className={css.icon}>
              <use href={`${sprite}#icon-${item.toLowerCase()}`} />
            </svg>
            <p className={css.text}>{item}</p>
          </li>
        ))}
      </ul>
      <p className={css.title}>Vehicle type</p>
      <ul className={css.typeList}>
        {vehicleTypeArray.map((item) => (
          <li
            key={item}
            onClick={() => handleChangeVehicleType(item)}
            className={
              css.typeItem + (vehicleType === item ? " " + css.isActive : "")
            }
          >
            <svg className={css.icon}>
              <use
                href={`${sprite}#icon-${item.toLowerCase().replace(" ", "")}`}
              />
            </svg>
            <p className={css.text}>{item}</p>
          </li>
        ))}
      </ul>
      <button className={css.button}>Search</button>
    </>
  );
};

export default Filters;
