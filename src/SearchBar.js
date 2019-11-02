import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchProduct, stockOnly } from './actions'


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.searchProduct(e.target.value);
  }

  handleInStockChange(e) {
    this.props.stockOnly(e.target.checked);

  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          // value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            // checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    searchProduct: (val) => {dispatch(searchProduct(val))},
    stockOnly: (val) => {dispatch(stockOnly(val))}
  }
}

const mapStateToProps = (state) => ({})


export default SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)
