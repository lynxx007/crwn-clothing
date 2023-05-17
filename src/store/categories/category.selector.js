import { createSelector } from 'reselect'
const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories

)

export const selectProducts = createSelector(
    [selectCategories],
    (categories) => categories
        .reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc  //accumulator is a map of all categories and their items.
        }, {})
)