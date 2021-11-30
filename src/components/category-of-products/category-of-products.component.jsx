import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './category-of-products.style';
import ProductsList from '../products-list/products-list.component';

const CategoryOfProducts = ({ collections }) => {
    console.log(collections)
    return(
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <ProductsList key={id} {...otherCollectionProps}/>
                ))
            }
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CategoryOfProducts);

