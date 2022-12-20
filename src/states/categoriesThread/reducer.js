import { ActionType } from './action';

function categoriesReducer(categoriesThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return {
        ...action.payload.categories,
      };
    case ActionType.SET_CATEGORY:
      return {
        ...action.payload.categories,
        selectedCategory: action.payload.category,
      };
    case ActionType.CLEAR_CATEGORY:
      return {
        ...action.payload.categories,
        selectedCategory: null,
      };
    default:
      return categoriesThread;
  }
}

export default categoriesReducer;
