export const selectLoadMore = (state) => state.campers.loadMore;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectPreviousPage = (state) => state.campers.previousPage;

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.item.id;
export const selectReviews = (state) => state.campers.item.reviews;
export const selectFeatures = (state) => state.campers.item.features;
export const selectSpecifications = (state) =>
  state.campers.item.specifications;

export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectLocation = (state) => state.filters.location;
export const selectVehicleEquipment = (state) => state.filters.vehicleEquipment;
export const selectVehicleType = (state) => state.filters.vehicleType;

export const selectFavorites = (state) => state.favorites.items;
