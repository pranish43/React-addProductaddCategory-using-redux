export const searchProduct = (term) => ({
  filterText: term,
  type: 'SEARCH'
})

export const stockOnly = (value) => ({
  inStockOnly: value,
  type: 'IN_STOCK'
})

export const addCategory = (value) => ({
  new_category: value,
  type: 'ADD_CATEGORY'
})

export const addProduct = (name,category,price,stocked) => ({
  category:category,
  price:price,
  stocked:stocked,
  name:name,
  type: 'ADD_PRODUCT'
})

