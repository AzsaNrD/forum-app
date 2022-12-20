const ActionType = {
  RECEIVE_CATEGORIES: 'categoriesThread/receive',
  SET_CATEGORY: 'categoriesThread/set',
  CLEAR_CATEGORY: 'categoriesThread/clear',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function setCategoriesActionCreator(categories, category) {
  return {
    type: ActionType.SET_CATEGORY,
    payload: {
      categories,
      category,
    },
  };
}

function clearCategoriesActionCreator(categories) {
  return {
    type: ActionType.CLEAR_CATEGORY,
    payload: {
      categories,
    },
  };
}

function asyncReceiveCategories(categories) {
  return async (dispatch) => {
    try {
      dispatch(receiveCategoriesActionCreator(categories));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncSetCategory(categoriesThread, category) {
  return async (dispatch) => {
    try {
      dispatch(setCategoriesActionCreator(categoriesThread, category));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncClearCategory(categoriesThread) {
  return async (dispatch) => {
    try {
      dispatch(clearCategoriesActionCreator(categoriesThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveCategoriesActionCreator,
  setCategoriesActionCreator,
  clearCategoriesActionCreator,
  asyncReceiveCategories,
  asyncSetCategory,
  asyncClearCategory,
};
