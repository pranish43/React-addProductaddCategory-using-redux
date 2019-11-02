import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'

class FilterableProductTable extends Component {
 
  render() {
    return (
      <div>
        <SearchBar/>
        <AddCategory/>
        <AddProduct/>
        <ProductTable/>
      </div>
    );
  }
}

export default FilterableProductTable;
