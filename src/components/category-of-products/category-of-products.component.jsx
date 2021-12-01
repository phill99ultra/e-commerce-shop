import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './category-of-products.style';
import ProductsList from '../products-list/products-list.component';

const CategoryOfProducts = () => {  
    const collections = useSelector(selectCollectionsForPreview)
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

export default CategoryOfProducts;

