import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CategoryOfProductsContainer from '../../components/category-of-products/category-of-products.container';
import CategoryPageContainer from '../category/category.container';

class ShopPage extends React.Component{   
    componentDidMount() {
       const { fetchCollectionsStart } = this.props;
       fetchCollectionsStart();
    }
    render() {
        const { match } = this.props;       
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={ `${match.path}` } 
                    component={CategoryOfProductsContainer}                    
                /> 
                <Route 
                    path={ `${match.path}/:collectionId`} 
                    component={CategoryPageContainer}
                />          
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);