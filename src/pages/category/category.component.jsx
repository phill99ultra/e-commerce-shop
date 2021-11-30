import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/product-item/product-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPage, CollectionItems, CollectionTitle } from './category.style';

const CategoryPage = ({ collection }) => {   
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryPage);