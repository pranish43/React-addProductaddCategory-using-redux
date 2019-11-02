import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { connect } from 'react-redux'

class ProductTable extends Component {
  render() {

    const rowsDict = {};
    const rows = [];

    this.props.products.forEach((product) => {
      if (rowsDict.hasOwnProperty(product.category)) {
        rowsDict[product.category].push(product)
      } else {
        rowsDict[product.category] = [product]
      }


    });
    for (const key in rowsDict) {

      rows.push(
        <ProductCategoryRow
          category={rowsDict[key][0].category}
          key={rowsDict[key][0].category} />
      );

      rowsDict[key].forEach(product => {
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
      });
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.todos.search,
  }
}



export default ProductTable = connect(
  mapStateToProps
)(ProductTable)