import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncReceiveCategories } from '../states/categoriesThread/action';

function Categories({ categoriesList, setCategory, clearCategory }) {
  const { categoriesThread } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveCategories(categoriesList));
  }, [dispatch]);

  if (categoriesThread === null) {
    return null;
  }

  return (
    <>
      {categoriesList.value.map((category) => (
        <button
          key={category}
          type="button"
          className={
            categoriesThread.selectedCategory === category
              ? 'text-gray-900 underline'
              : 'text-gray-500'
          }
          onClick={
            categoriesThread.selectedCategory === category
              ? () => clearCategory(categoriesThread)
              : () => setCategory(categoriesThread, category)
          }
        >
          #
          {category}
        </button>
      ))}
    </>
  );
}

Categories.propTypes = {
  categoriesList: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  clearCategory: PropTypes.func.isRequired,
};

export default Categories;
