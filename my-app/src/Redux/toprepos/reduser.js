import { fetchMostRatedRepositories } from "../../pages/homepage/topRepo/servises";
const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

const getTopRepositoriesRequest = () => {
  return {
    type: "GET_TOP_REPOSITORIES_REQUEST",
  };
};
const getTopRepositoriesSuccess = (payload) => {
  return {
    type: "GET_TOP_REPOSITORIES_SUCCESS",
    payload: payload,
  };
};
const getTopRepositoriesError = (error) => {
  return {
    type: "GET_TOP_REPOSITORIES_ERROR",
    error: error,
  };
};

export function getTopRepositories() {
  return async (dispatch, getState) => {
    dispatch(getTopRepositoriesRequest());

    try {
      const repositories = await fetchMostRatedRepositories();

      dispatch(getTopRepositoriesSuccess(repositories));
    } catch (error) {
      console.error(error);

      dispatch(getTopRepositoriesError(error));
    }
  };
}

export const topReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOP_REPOSITORIES_REQUEST":
      return { ...state, isLoading: true };
    case "GET_TOP_REPOSITORIES_SUCCESS":
      return { ...state, items: action.payload.items, isLoading: false };
    case "GET_TOP_REPOSITORIES_ERROR":
      return { ...state, error: action.error, isLoading: false };
    default:
  }
  return state;
};
