import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductItem from '../../components/product-item/product-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPage, CollectionItems, CollectionTitle } from './category.style';

const CategoryPage = () => {   
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;

    return(
        <CollectionPage>
            <CollectionTitle>{ title }</CollectionTitle>
            <CollectionItems>
                {
                    items.map(item => <ProductItem key={item.id} item={item}/>)
                }
            </CollectionItems>
        </CollectionPage>
    )
}

export default CategoryPage;