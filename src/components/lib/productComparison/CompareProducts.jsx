import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
// import {Compare, ProductList} from '../../components'
import Compare from './Compare'
import ProductList from './ProductList'
// import * as productActions from '../../actions/product'
import {products as productActions} from '../../../redux/actions/'
import {connect} from 'react-redux'

class CompareProducts extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);
    console.log(compareProducts)


    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length > 1 && 
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(CompareProducts)
