import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CategoryOfProductsContainer from '../../components/category-of-products/category-of-products.container';
import CategoryPageContainer from '../category/category.container';

const ShopPage = ({ match }) => {   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);   
        
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

export default ShopPage;