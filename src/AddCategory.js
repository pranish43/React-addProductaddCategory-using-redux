import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategory } from './actions'


class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.addCategory = this.addCategory.bind(this);
    
  }

  addCategory() {
    let input = document.getElementById("addCat");
    this.props.addCategory(input.value);
    console.log(input.value);
    input.value = "";
  }


  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          id="addCat"
        />
        
            <input type="button" onClick={this.addCategory} value="Add Category"/>
                 
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (val) => {dispatch(addCategory(val))},
  }
}

const mapStateToProps = (state) => ({})


export default AddCategory = connect(mapStateToProps, mapDispatchToProps)(AddCategory)
