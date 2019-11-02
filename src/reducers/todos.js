let products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]
let initialState = {
  products: products,
  search: products,
  categories: [
    'Sporting Goods',
    'Electronics'
  ],
  inStockOnly: false,
  filterText: '',

  category:'',
  price:'',
  stocked:'',
  name:''
};

const filter = (action, state, inStockOnly,filterText) => {

  return (product) => {
    if (product.name.indexOf(filterText) === -1) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SEARCH':
      return {
        ...state,
        search: state.products.filter(filter(action, state, state.inStockOnly,action.filterText))
      }
    case 'IN_STOCK':
      return {
        ...state,
        inStockOnly: action.inStockOnly,
        search: state.products.filter(filter(action, state, action.inStockOnly,state.filterText))

      }
    case 'ADD_PRODUCT':
      let new_products = [...state.products, {
        category: action.category,
        price: action.price,
        stocked: action.stocked,
        name: action.name
      }];
      return {
        ...state,
        products: new_products,
        search: new_products.filter(filter(action, state, state.inStockOnly,state.filterText))
      }

    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: state.categories.indexOf(action.new_category) < 0 ? [...state.categories, action.new_category] : state.categories
      }

    default:
      return state
  }
}

export default todos
