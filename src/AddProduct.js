import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProduct } from './actions'


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this);

    }

    addProduct() {
        let name = document.getElementById("name");
        let category = document.getElementById("cat");
        let stocked = document.getElementById("stocked");
        let price = document.getElementById("price");
        console.log(name.value, category.value, `$${price.value}`, stocked.checked);
        if (name.value !== '' && price.value !== '' && category.value !== '') {
            this.props.addProduct(name.value, category.value, `$${price.value}`, stocked.checked);
            name.value = price.value = stocked.value = '';
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                />

                <select id="cat">
                    {this.props.categories.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Price"
                    id="price"
                />
                <label>
                <input
                    type="checkbox"
                    placeholder="Name"
                    id="stocked"
                />
                In stock
                </label>
                

                <input type="button" onClick={this.addProduct} value="Add Product" />

            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (name, category, price, stocked) => { dispatch(addProduct(name, category, price, stocked)) },
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.todos.categories,
    }
}


export default AddProduct = connect(mapStateToProps, mapDispatchToProps)(AddProduct)
