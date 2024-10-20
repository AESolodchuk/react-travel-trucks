import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFilter = "";

export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// export const selectFilteredTrucks = createSelector(
//   [selectCampers],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
