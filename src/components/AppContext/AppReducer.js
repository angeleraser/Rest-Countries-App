import { getCountriesByRegion } from "../../selectors/getCountriesByRegion";
import { getCountriesByQuery } from "../../selectors/getCountriesByQuery";
import { getSortedCountriesBy } from "../../selectors/getSortedCountriesBy";
export const initialState = {
  homePage: {
    countriesList: [],
    filteredList: [],
    currentRegion: "Filter by Region",
    sortedBy: "Sort by",
    shouldFetchData: true,
  },
  detailsPage: {
    fetchedCountries: [],
    currentCountry: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_COUNTRIES_LIST":
      return {
        ...state,
        homePage: {
          ...state.homePage,
          shouldFetchData: false,
          countriesList: action.payload,
          filteredList: action.payload,
        },
      };
    case "FILTER_COUNTRIES_BY_REGION":
      return {
        ...state,
        homePage: {
          ...state.homePage,
          filteredList: getCountriesByRegion(
            state.homePage.countriesList,
            action.payload
          ),
          currentRegion: action.payload,
        },
      };
    case "SORT_COUNTRIES_BY":
      return {
        ...state,
        homePage: {
          ...state.homePage,
          filteredList: getSortedCountriesBy(
            state.homePage.filteredList,
            action.payload
          ),
          sortedBy: action.payload,
        },
      };
    case "SEARCH_COUNTRY":
      return {
        ...state,
        homePage: {
          ...state.homePage,
          filteredList: getCountriesByQuery(
            state.homePage.countriesList,
            action.payload
          ),
        },
      };
    case "SAVE_FETCHED_COUNTRY":
      return {
        ...state,
        detailsPage: {
          ...state.detailsPage,
          fetchedCountries: [
            action.payload,
            ...state.detailsPage.fetchedCountries,
          ],
        },
      };
    case "SET_CURRENT_COUNTRY":
      return {
        ...state,
        detailsPage: {
          ...state.detailsPage,
          currentCountry: action.payload,
        },
      };
    default:
      return state;
  }
};
